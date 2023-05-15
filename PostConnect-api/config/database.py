from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

db_user = "root"
db_pass = "root"
db_name = "post_connect_db"
db_server = "127.0.0.1"
db_port = "3306"

db_type = "mysql"
db_driver = "pymysql"

db_conection = f"{db_type}+{db_driver}://{db_user}:{db_pass}@{db_server}:{db_port}/{db_name}"

engine = create_engine(db_conection, echo=True)

meta = MetaData()

conn = engine.connect()

Session = sessionmaker(bind=engine)

Base = declarative_base()