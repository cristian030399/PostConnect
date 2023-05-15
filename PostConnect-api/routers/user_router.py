from fastapi import APIRouter, Path, Query, Body, Depends
from schemas.user_schemas import SignupSchema, LoginSchema
from fastapi.responses import JSONResponse
from config.database import Session
from services.user_service import UserService
from fastapi.encoders import jsonable_encoder

user_router = APIRouter()

@user_router.post('/login', tags=['auth'])
def login(loginSchema: LoginSchema):
    db = Session()
    result = UserService(db).login(loginSchema)
    if not result:
        return JSONResponse(status_code=401, content={'message':'Email or password incorrect'})
    return JSONResponse(status_code=200, content=result)

@user_router.post('/signup', tags=['auth'])
def signup(signupSchema: SignupSchema):
    db = Session()
    user = UserService(db).verify_user_exist(signupSchema)
    if(user):
        return JSONResponse(status_code=401, content={'message': 'User already exist'})
    result = UserService(db).create_user(signupSchema)
    return JSONResponse(status_code=200, content=jsonable_encoder(result))