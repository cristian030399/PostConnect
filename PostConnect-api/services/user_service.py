from models.user_model import UserModel
from sqlalchemy.orm.session import Session
from schemas.user_schemas import SignupSchema, LoginSchema
from utils.jwt_manager import create_token


class UserService():
    def __init__(self, db: Session) -> None:
        self.db = db

    def create_user(self, signupSchema: SignupSchema):
        new_user = UserModel(**signupSchema.dict())
        self.db.add(new_user)
        self.db.commit()
        new_user.id
        return new_user

    def verify_user_exist(self, signupSchema: SignupSchema):
        user = self.db.query(UserModel).filter(
            UserModel.email == signupSchema.email or UserModel.username == signupSchema.username).first()
        return user

    def login(self, loginSchema: LoginSchema):
        user = self.db.query(UserModel).filter(
            UserModel.email == loginSchema.email).first()
        if (not user):
            return
        if (user.password != loginSchema.password):
            return
        token: str = create_token(
            {"sub": user.id, "email": user.email, "username": user.username})
        return {"acces_token": token}
