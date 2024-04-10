from flask import Blueprint

from services.persona import create_persona_service,get_personas_service,get_persona_service,update_persona_service,delete_persona_service

persona = Blueprint('persona', __name__)

@persona.route('/', methods = ['GET'])
def get_personas():
    return get_personas_service()

@persona.route('/<id>', methods = ['GET'])
def get_persona(id):
    return get_persona_service(id)

@persona.route('/', methods = ['POST'])
def create_persona():
    return create_persona_service()

@persona.route('/<id>', methods = ['PUT'])
def update_persona(id):
    return update_persona_service(id)

@persona.route('/<id>', methods = ['DELETE'])
def delete_persona(id):
    return delete_persona_service(id)