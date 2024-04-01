from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:djathgus0728!@127.0.0.1:3306/soundcover"

engine = create_engine(SQLALCHEMY_DATABASE_URL, encoding='utf-8')

SessionLocal = sessionmaker(autocommit = False, autoflush = False, bind = engine)

Base = declarative_base()