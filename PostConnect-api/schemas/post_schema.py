from pydantic import BaseModel, Field
from typing import Any, Optional, List

class CreatePostSchema(BaseModel):
    user_id: Optional[int] = None
    title: str = Field(max_length=255)
    content: str = Field(max_length=255)

    class Config:
        schema_extra = {
            "example": {
                "title": "Mi post",
                "content": "Descripción del post"
            }
        }