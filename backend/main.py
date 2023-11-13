from fastapi import FastAPI
#from fastapi.responses import HTMLResponse
#from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

app = FastAPI()

memberDB = []
albumDB = []

class Member(BaseModel):
    name: str
    id: str
    password: str

    def __init__(self, name, id, password):
        self.name = name
        self.id = id
        self.password = password

class Image(BaseModel):
    album_index: int
    member_name: str
    url: str

    def __init__(self, member_name, url):
        self.member_name = member_name
        self.url = url
        self.album_indexalbum_index = len(albumDB)

@app.get("/")
def root():
    return {"Hello":"SoundCover"}

@app.post("/LogIn")
def is_memberinfo_true(member_id: str, member_password: str):
    flag = False
    for member in memberDB:
        if member.id == member_id and member.password == member_password:
            flag = True
    return {flag}


@app.post("/SignUp")
def post_signup_info(member_name: str, member_id: str, member_password: str):
    flag = True
    for member in memberDB:
        if member.name == member_name:
            flag = False
    if flag == True:
        memberDB.append(Member(member_name,member_id,member_password))
    return {flag}

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