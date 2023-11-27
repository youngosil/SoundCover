from database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey

class Cover(Base):
    __tablename__ = "images"

    id = Column(Integer, primary_key = True, index = True)
    title = Column(String)
    singer = Column(String)
    print_title = Column(Boolean, default = False)
    print_singer = Column(Boolean, default = False)
    genre = Column(String)
    style = Column(String)
    positive_element = Column(String)
    positive_sentiment = Column(String)
    url = Column(String)
    owner_id = Column(Integer, ForeignKey("users.id"))

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key= True, index = True)
    username = Column(String, unique = True)
    hashed_password = Column(String)
