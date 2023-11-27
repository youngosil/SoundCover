from fastapi import FastAPI
import models
from database import engine, SessionLocal
from router import auth, cover
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 설정 (서로 다른 도메인 간 백-프론트 연결 가능)
# 배포할 때 CORS 하면 안좋아서 변경해야함
origins = [
    "http://localhost",
    "http://localhost:3000",  # 리액트 개발 서버의 주소
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind = engine)

app.include_router(auth.router)
app.include_router(cover.router)
