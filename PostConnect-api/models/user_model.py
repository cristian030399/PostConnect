from config.database import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship


class UserModel(Base):
    __tablename__= 'users'

    id = Column(Integer, primary_key=True)
    email = Column(String(64), unique=True, nullable=False)
    password = Column(String(64), nullable=False)
    username = Column(String(32), unique=True, nullable=False)
    # posts = relationship('Post', backref='users')
    # comments = relationship('Comments', backref='users')

