const writeAndRead = require('./writeAndReadObject');
const readConsole = require('./readConsole');


// Ejemplo de uso
writeAndRead('./miFichero.json', { calle: 'Teruel', numero: 8 });

readConsole(console.log); // Imprime por consola el objeto creado