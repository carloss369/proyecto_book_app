from flask import Flask
from flask_jwt_extended import JWTManager
from flask_swagger_ui import get_swaggerui_blueprint
from controllers.book_controller import book_bp
from controllers.user_controller import user_bp
from controllers.order_controller import order_bp
from flask_cors import CORS
from database import db

app=Flask(__name__)

app.config["JWT_SECRET_KEY"]="tu_clave_secreta_aqui"

SWAGGER_URL="/api/docs"

API_URL="/static/swagger.json"


swaggger_ui_blueprint=get_swaggerui_blueprint(
    SWAGGER_URL,API_URL,config={"app_name":"Proyecto Web III - API"}
)
app.register_blueprint(swaggger_ui_blueprint,url_prefix=SWAGGER_URL)

app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///platform.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

db.init_app(app)

jwt=JWTManager(app)

cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

app.register_blueprint(user_bp,url_prefix="/api")
app.register_blueprint(book_bp,url_prefix="/api")
app.register_blueprint(order_bp,url_prefix="/api")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)