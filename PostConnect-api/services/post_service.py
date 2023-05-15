from models.post_model import PostModel
from sqlalchemy.orm.session import Session
from schemas.post_schema import CreatePostSchema

class PostService():
    def __init__(self, db: Session) -> None:
        self.db = db

    def create_post(self, createPostSchema: CreatePostSchema):
        new_post = PostModel(**createPostSchema.dict())
        self.db.add(new_post)
        self.db.commit()
        new_post.id
        return new_post
    
    def get_posts(self):
        result = self.db.query(PostModel).all()
        return result
    
    def get_post(self, id):
        result = self.db.query(PostModel).filter(PostModel.id == id).first()
        return result
    
    def delete_post(self, id, user_id):
        result = self.db.query(PostModel).filter(PostModel.id == id and PostModel.user_id == user_id).first()
        if not result:
            return False
        self.db.delete(result)
        self.db.commit()
        return True
        