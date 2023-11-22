from fastapi import APIRouter, Depends, HTTPException, Path, Query
from pydantic import BaseModel, Field
from models import Cover
from database import engine, SessionLocal
from typing_extensions import Annotated
from sqlalchemy.orm import Session
from starlette import status
from .auth import get_current_user
import requests
import json
import urllib
from PIL import Image

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]

class CoverRequest(BaseModel):
    title: str 
    genre: str 
    trendingon: str 
    style: str 
    positive_element: str 
    negative_element: str 
    positive_sentiment: str 
    negative_sentiment: str 
    url: str

@router.get("/myalbum")
def read_all(user: user_dependency, db: db_dependency):
    return db.query(Cover).filter(Cover.owner_id == user.get("id")).all()

@router.get("/myalbum/{cover_id}", status_code = status.HTTP_200_OK)
def read_cover(user: user_dependency, db: db_dependency, cover_id: int = Path(gt = 0)):
    if user is None:
        raise HTTPException(status_code = 401, detail = "Authentication Failed!!")
    
    cover_model = db.query(Cover).filter(Cover.id == cover_id).filter(Cover.owner_id == user.get("id")).first()
    if cover_model is not None:
        return cover_model
    raise HTTPException(status_code = 404, detail = "Cover not found.")

@router.post("/cover", status_code = status.HTTP_201_CREATED)
def create_cover(user: user_dependency, db: db_dependency, cover_request: CoverRequest):
    if user is None:
        raise HTTPException(status_code = 401, detail = "Authentication Failed!!")
    
    # [내 애플리케이션] > [앱 키] 에서 확인한 REST API 키 값 입력
    REST_API_KEY = 'b6b41949c283895dd394ff72ca61f59c'

    # 이미지 생성하기 요청
    def t2i(prompt, negative_prompt):
        r = requests.post(
            'https://api.kakaobrain.com/v2/inference/karlo/t2i',
            json = {
                'prompt': prompt,
                'negative_prompt': negative_prompt
            },
            headers = {
                'Authorization': f'KakaoAK {REST_API_KEY}',
                'Content-Type': 'application/json'
            }
        )
        # 응답 JSON 형식으로 변환
        response = json.loads(r.content)
        print(response)
        return response

    # 프롬프트에 사용할 제시어
    prompt = "make a album cover" +"\ntitle: " + cover_request.title + "\ngenre: " + cover_request.genre + "\nstyle: " + cover_request.style + "\nsubject: " + cover_request.positive_element + "\nsentiment: " + cover_request.positive_sentiment
    negative_prompt = cover_request.negative_element + cover_request.negative_sentiment

    # 이미지 생성하기 REST API 호출
    response = t2i(prompt, negative_prompt)

    # 응답의 첫 번째 이미지 생성 결과 출력하기
    result = response.get('images')[0].get('image')
    cover_request.url = result
    cover_model = Cover(**cover_request.model_dump(), owner_id = user.get("id"))
    db.add(cover_model)
    db.commit()


@router.delete("/cover/{cover_id}", status_code = status.HTTP_204_NO_CONTENT)
def delete_cover(user: user_dependency, db: db_dependency, cover_id: int = Path(gt = 0)):
    if user is None:
        raise HTTPException(status_code = 401, detail = "Authentication Failed!!")
    cover_model = db.query(Cover).filter(Cover.id == cover_id).filter(Cover.owner_id == user.get("id")).first()
    if cover_model is None:
        raise HTTPException(status_code = 404, detail = "Cover not found.")
    db.query(Cover).filter(Cover.id == cover_id).filter(Cover.owner_id == user.get("id")).delete()
    db.commit()