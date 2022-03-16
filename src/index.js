// 2. nuestro punto de entrada, donde se importará la clase de server

const Serve = require('./server.js'); // se importa el archivo server.js a index


function main(){
    const srv = new Serve(3000); //Instanciando la clase SERVE
    srv.initServer(); //con este metodo arranca la clase Server con el método initServer
}
main();