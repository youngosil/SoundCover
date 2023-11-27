from fastapi import FastAPI
import models
from database import engine, SessionLocal
from router import auth, cover
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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
