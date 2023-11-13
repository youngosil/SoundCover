from fastapi import FastAPI
#from fastapi.responses import HTMLResponse
#from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
# CORS 미들웨어를 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 허용할 origin을 추가
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메서드를 허용
    allow_headers=["*"],  # 모든 헤더를 허용
)

memberDB = []
albumDB = []

class Member(BaseModel):
    name: str
    id: str
    password: str

class Image(BaseModel):
    album_index: int
    member_name: str
    url: str

@app.get("/")
def root():
    return {"Hello":"SoundCover"}

@app.post("/LogIn")
def is_memberinfo_true(member: Member):
    for existing_member in memberDB:
        if existing_member.id == member.id and existing_member.password == member.password:
            return {'status':'success'}
    return {'status':'fail'}


@app.post("/SignUp")
def post_signup_info(member: Member):
    flag = True
    for existing_member in memberDB:
        if existing_member.name == member.name:
            flag = False
            return{"status": "fail"}
    if flag:
        memberDB.append(member)
    return {"status": "success"}

@app.get("/MyPage/{member_name}/{album_index}")
def get_album(member_name  : str, album_index: int):
    if albumDB[album_index].member_name == member_name:
        return {albumDB[album_index].url}
    else:
        return {False}
    
@app.post("/MakeAlbum/{member_name}")
def make_album_cover(member_id: str, prompt: str):
    # model이 들어갈 자리
    image_url = prompt + "hello"
    albumDB.append(Image(member_id, image_url))
    return {image_url} 

@app.get("/MakeAlbum/{member_name}/{album_index}")
def show_album_cover(member_name: str, album_index: int):
    if albumDB[album_index].member_name == member_name:
        return {albumDB[album_index].url}
    else:
        return {False}

"""
@app.delete("/MyPage/{member_id}/{Album_index}")
def delete_album(member_name  : str, album_index: int):
    if albumDB[album_index].member_name == member_name:
        albumDB.pop(album_index)
        return True
    else:
        return False
"""