import datetime
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from database import SessionLocal
from models import Users
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from starlette import status
from typing_extensions import Annotated
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from datetime import timedelta

router = APIRouter(
    prefix = "/auth",
    tags = ["auth"]
)

SECRET_KEY = "026e9267f6b7a74cc29f5c823c9413acf4562d7d1bc88bd49dbee93bb5af3325"
ALGORITHM = "HS256"

bcrypt_context = CryptContext(schemes = ['bcrypt'], deprecated = 'auto')
oauth2_bearer = OAuth2PasswordBearer(tokenUrl = "auth/token")

class CreateUserRequest(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

def authenticate_user(username: str, password: str, db):
    user = db.query(Users).filter(Users.username == username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user

def create_access_token(username: str, user_id: int, expires_delta: timedelta):
    encode = {'sub' : username, "id": user_id}
    expires = datetime.datetime.utcnow() + expires_delta
    encode.update({"exp" : expires})
    return jwt.encode(encode, SECRET_KEY, algorithm = ALGORITHM)

def get_current_user(token: Annotated[str, Depends(oauth2_bearer)]):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms = [ALGORITHM])
        username: str = payload.get("sub")
        user_id: int = payload.get("id")
        if username is None or user_id is None:
            raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED,
                                detail = "Could not validate user")
        return {"username" : username, "id": user_id}
    except JWTError:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED,
                            detail = "Could not validate user")
    
@router.post("/", status_code = status.HTTP_201_CREATED)
def create_user(db: db_dependency, create_user_request: CreateUserRequest):
    
    # id(username) 중복 확인 코드
    ''' check if the username already exists
    if db.query(Users).filter(Users.username == create_user_request.username).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail='Username already registered') '''
    
    create_user_model = Users(
        username = create_user_request.username,
        hashed_password = bcrypt_context.hash(create_user_request.password)
    ) 
    
    db.add(create_user_model)
    db.commit()

    # 엄소 수정 부분
    return {"status":"success", "message": "User created succesfully"}

@router.post("/token", response_model = Token)
def login_for_access_tokenn(form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
                            db: db_dependency):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user: 
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED,
                            detail = "Could not validate user")
    token = create_access_token(user.username, user.id, timedelta(minutes = 20))
    return {'access_token': token, "token_type" : "bearer" }