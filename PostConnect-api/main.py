from fastapi import FastAPI
from config.database import engine, Base
from middlewares.error_handler import ErrorHandler
from routers.user_router import user_router
from routers.post_router import post_router
from routers.comment_router import comment_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.title = "Mi aplicación con FastApi"
app.version = "0.0.1"

origins = [
    "http://localhost:3000"
]

app.add_middleware(ErrorHandler)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user_router)
app.include_router(post_router)
app.include_router(comment_router)

Base.metadata.create_all(bind=engine)