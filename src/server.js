/*1. crear el servidor*/

const express = require('express');  //importamos express y se guarda en una variable express
const cors = require('cors'); //importamos cors y se guarda en una variable cors
const router = require('./routers/task.router.js')


//escribir el nombre de la class con inicial mayuscula
class Serve{
    constructor(port){
        this.port = port;
        this.api = express(); //instanciar express
        this.initRouter();  //Iniciando la función de rutas (cuando se crea la instancia de la clase serve, lee de primero el constructor) nos manda a las direcciones credas
    }

    //metodo para inicializar la api
    initServer(){
        this.api.listen(this.port,()=>{console.log('Iniciando servicio');});
    }

    //creando las rutas
    initRouter(){
        this.api.use('/api/v1', router);
    }
} 

module.exports = Serve; //exportar los puertos