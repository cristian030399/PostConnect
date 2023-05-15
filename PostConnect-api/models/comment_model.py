from config.database import Base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func


class CommentModel(Base):
    __tablename__ = 'comments'

    id = Column(Integer, primary_key=True)
    content = Column(String(255), nullable=False)
    date = Column(DateTime(timezone=True),
                  server_default=func.now(), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey(
        'posts.id', ondelete="CACADE"), nullable=False)
