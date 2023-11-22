from database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey

class Cover(Base):
    __tablename__ = "images"

    id = Column(Integer, primary_key = True, index = True)
    title = Column(String)
    genre = Column(String)
    trendingon = Column(String)
    style = Column(String)
    positive_element = Column(String)
    negative_element = Column(String)
    positive_sentiment = Column(String)
    negative_sentiment = Column(String)
    url = Column(String)
    owner_id = Column(Integer, ForeignKey("users.id"))

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key= True, index = True)
    username = Column(String, unique = True)
    hashed_password = Column(String)

{"positive_element": "dog, "}