from fastapi import APIRouter, Depends, HTTPException, Path, Query
from pydantic import BaseModel, Field
from models import Cover
from database import engine, SessionLocal
from typing_extensions import Annotated
from sqlalchemy.orm import Session
from starlette import status
from .auth import get_current_user
from openai import OpenAI

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
    singer: str
    print_title: bool
    print_singer: bool
    genre: str 
    style: str 
    positive_element: str
    positive_sentiment: str 
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
    #  모델 넣기 --------------------------------------------------------------------------------------------------------------------------------------
    client = OpenAI(
        organization='org-VYoykBdywSgc0QN914YlynML',
        api_key = "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"
    )

    # ------------------------------------------------------------------------------------------------------------------------------------
    # 프롬프트에 사용할 제시어
    
    prompt_message = f"Create a {cover_request.genre} album cover, {cover_request.positive_element}, {cover_request.positive_sentiment}"
    if cover_request.print_title == True and cover_request.print_singer == True:
        prompt_message += f", The album should convey the text '{cover_request.title}' and '{cover_request.singer}'."
    elif cover_request.print_title == True:
        prompt_message += f", The album should convey the text '{cover_request.title}'."
    elif cover_request.print_singer == False:
        prompt_message += f", The album should convey the text '{cover_request.singer}'."
    else:
        prompt_message += "."

    print(prompt_message)
    # 이미지 생성하기 REST API 호출
    response = client.images.generate(
    model="dall-e-3",
    prompt = prompt_message,
    size="1024x1024",
    quality="standard",
    n=1,
    )
    image_url = response.data[0].url

    # 응답의 첫 번째 이미지 생성 결과 출력하기
    cover_request.url = image_url
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