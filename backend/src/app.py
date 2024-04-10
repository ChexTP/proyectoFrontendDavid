from flask import Flask
from dotenv import load_dotenv
import os
from flask_cors import CORS

from config.mongodb import mongo
from routes.persona import persona

load_dotenv()

app=Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = os.getenv('MONGO_URI')
mongo.init_app(app)

@app.route('/')
def index():
    return 'hola mundoooo'

app.register_blueprint(persona, url_prefix='/persona')

if __name__ == '__main__':
   app.run(debug=True)
   
 