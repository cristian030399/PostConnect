from fastapi.security import HTTPBearer
from fastapi import Request, HTTPException
from utils.jwt_manager import create_token, validate_token

class JWTBearer(HTTPBearer):
    async def __call__(self, request: Request):
        auth = await super().__call__(request)
        data = validate_token(auth.credentials)
        request.state.user = data
        # request['user'] = data
        # request.
        # print(data)
        # if data['email'] != "admin@gmail.com":
        #     raise HTTPException(
        #         status_code=403, detail="Credenciales son invalidas")