const wr = require('./writeAndReadObject');
const rd = require('./readConsole');


// // Ejemplo de uso
// writeAndRead('./miFichero.json', { calle: 'Teruel', numero: 8 });
// readConsole(console.log); // Imprime por consola el objeto creado






// Ejemplo de uso de la función 'readConsole' con una función de retorno de llamada para manejar el objeto de usuario
rd.readConsole((userObj) => {
  console.log('Detalles del usuario:', userObj);
});

// Ejemplo de uso de la función writeAndRead
wr.writeAndRead('writeAndReadObject.json', { calle: 'Teruel', numero: 8 });
