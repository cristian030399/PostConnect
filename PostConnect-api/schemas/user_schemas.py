from pydantic import BaseModel, Field

class LoginSchema(BaseModel):
    email: str = Field(min_length=5, max_length=64)
    password: str = Field(min_length=8, max_length=64)
    
class SignupSchema(BaseModel):
    email: str = Field(min_length=5, max_length=64)
    password: str = Field(min_length=8, max_length=64)
    username: str = Field(min_length=6, max_length=32)