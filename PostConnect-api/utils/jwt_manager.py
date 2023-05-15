from jwt import encode, decode

jwt_key = "sdsvretg43g43grewgwqtg43thrteyhj6ju5564+*-+535yh+rthdfs-*b8g4b+edsfb5-w4r"

def create_token(data: dict):
    token: str = encode(payload=data, key=jwt_key, algorithm="HS256")
    return token

def validate_token(token: str) -> dict:
    data: dict = decode(token, key=jwt_key, algorithms=["HS256"])
    return data

