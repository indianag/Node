const fs = require('fs');

function writeAndRead(path, obj){

    //escribir en el fichero
    fs.writeFileSync(__dirname + path, JSON.stringify(obj));

    //leer el fichero y mostrar por consola
    const content = fs.readFileSync(__dirname + path);
    const parsedObj = JSON.parse(content);
    console.log(parsedObj);
}
module.exports = writeAndRead;
