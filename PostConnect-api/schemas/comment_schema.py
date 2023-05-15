from pydantic import BaseModel, Field
from typing import Any, Optional, List

class CreateCommentSchema(BaseModel):
    user_id: Optional[int] = None
    post_id: int
    content: str = Field(max_length=255)

    class Config:
        schema_extra = {
            "example": {
                "content": "Comentario",
                "post_id": 1
            }
        }