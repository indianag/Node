const fs = require('fs');

function writeAndRead(path, obj){

    //escribir en el fichero
    fs.writeFileSync(path, JSON.stringify(obj));

    //leer el fichero y mostrar por consola
    const content = fs.readFileSync(path);
    const parsedObj = JSON.parse(content);
    console.log(parsedObj);
}

// writeAndRead('./miFichero.json', {calle:"Teruel", numero: 8});
module.exports ={ writeAndRead};
