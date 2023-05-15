from models.comment_model import CommentModel
from sqlalchemy.orm.session import Session
from schemas.comment_schema import CreateCommentSchema

class CommentService():
    def __init__(self, db: Session) -> None:
        self.db = db

    def create_comment(self, createCommentSchema: CreateCommentSchema):
        new_comment = CommentModel(**createCommentSchema.dict())
        self.db.add(new_comment)
        self.db.commit()
        new_comment.id
        return new_comment
    
    def get_comments(self):
        result = self.db.query(CommentModel).all()
        return result
    
    def get_comments_by_post(self, post_id):
        result = self.db.query(CommentModel).filter(CommentModel.post_id == post_id).all()
        return result


        