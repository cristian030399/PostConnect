from fastapi import APIRouter, Path, Query, Body, Depends, Request
# from schemas.user_schemas import User
from schemas.post_schema import CreatePostSchema
from config.database import Session
# from models.user_model import UserModel
from models.post_model import PostModel
from utils.jwt_manager import create_token
from fastapi.responses import JSONResponse
from middlewares.jwt_bearer import JWTBearer
from fastapi.encoders import jsonable_encoder
from services.post_service import PostService

post_router = APIRouter(dependencies=[Depends(JWTBearer())])

@post_router.post('/posts', tags=['Posts'])
def create_post(createPostSchema: CreatePostSchema, request: Request):
    user = request.state.user
    db = Session()
    createPostSchema.user_id = user['sub']
    result = PostService(db).create_post(createPostSchema)
    return JSONResponse(status_code=201, content=jsonable_encoder(result))

@post_router.get('/posts', tags=['Posts'])
def get_posts():
    db = Session()
    result = PostService(db).get_posts()
    return jsonable_encoder(result)

@post_router.get('/posts/{id}', tags=['Posts'])
def get_post(id: int):
    db = Session()
    result = PostService(db).get_post(id)
    if not result:
        return JSONResponse(status_code=404, content={'message': 'Not found'})
    return jsonable_encoder(result)

@post_router.delete('/posts/{id}', tags=['Posts'])
def delete_post(id: int, request: Request):
    user = request.state.user
    db = Session()
    result = PostService(db).delete_post(id, user['sub'])

    print(result)
    if not result:
        return JSONResponse(content={'message': 'Post was not deleted'})
    return JSONResponse(content={'message': 'Post has been deleted'})