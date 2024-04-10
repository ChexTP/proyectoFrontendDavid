from flask import request,Response
from bson import json_util,ObjectId

from config.mongodb import mongo


def create_persona_service():
    data = request.get_json()
    cedula = data.get('cedula', None)
    nombre = data.get('nombre', None)
    apellidos = data.get('apellidos', None)
    correo = data.get('correo', None)
    
    response = mongo.db.personas.insert_one ({
        'cedula': cedula,
        'nombre' : nombre,
        'apellidos' : apellidos,
        'correo' : correo
    })
    
    result = {
        'id': str(response.inserted_id),
        'cedula' : cedula,
        'nombre' : nombre,
        'apellidos' : apellidos,
        'correo' : correo
    }
    return result

def get_personas_service():
    data = mongo.db.personas.find()
    result = json_util.dumps(data)
    return Response(result,mimetype='application/json')

def get_persona_service(id):
    data = mongo.db.personas.find_one({'_id':ObjectId(id)})
    result = json_util.dumps(data)
    return Response(result,mimetype='application/json')

def update_persona_service(id):
    data = request.get_json()
    response = mongo.db.personas.update_one({'_id':ObjectId(id)},{'$set':data})
    if response.modified_count >=1:
        return 'persona actualizada correctamente', 200
    else:
        return 'persona no encontrada', 404

def delete_persona_service(id):
    response = mongo.db.personas.delete_one({'_id':ObjectId(id)})
    if response.deleted_count >=1:
        return 'persona borrada correctamente', 200
    else:
        return 'perona no encontrada', 404