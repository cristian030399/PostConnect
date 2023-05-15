from fastapi import APIRouter, Path, Query, Body, Depends, Request
# from schemas.user_schemas import User
from schemas.comment_schema import CreateCommentSchema
# from models.user_model import UserModel
from models.comment_model import CommentModel
from utils.jwt_manager import create_token
from fastapi.responses import JSONResponse
from middlewares.jwt_bearer import JWTBearer
from config.database import Session
from fastapi.encoders import jsonable_encoder
from services.comment_service import CommentService

comment_router = APIRouter(dependencies=[Depends(JWTBearer())])

@comment_router.post('/comments', tags=['Comments'])
def create_comment(createCommentSchema: CreateCommentSchema, request: Request):
    user = request.state.user
    db = Session()
    createCommentSchema.user_id = user['sub']
    result = CommentService(db).create_comment(createCommentSchema)
    return JSONResponse(status_code=201, content=jsonable_encoder(result))

@comment_router.get('/comments', tags=['Comments'])
def get_coments():
    db = Session()
    result = CommentService(db).get_comments()
    return jsonable_encoder(result)

@comment_router.get('/comments/', tags=['Comments'])
def get_comments_by_post(id_post: int):
    db = Session()
    result = CommentService(db).get_comments_by_post(id_post)
    return jsonable_encoder(result)