const writeAndRead = require('./writeAndReadObject');
const readConsole = require('./readConsole');


// // Ejemplo de uso
// writeAndRead('./miFichero.json', { calle: 'Teruel', numero: 8 });
// readConsole(console.log); // Imprime por consola el objeto creado



// Ejemplo de uso: llamar a 'readConsole' con una función de retorno de llamada para manejar el objeto de usuario
readConsole((userObj) => {
  console.log('Detalles del usuario:', userObj);
});