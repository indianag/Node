const fs = require('fs/promises');
const readline = require('readline');


//readline.createInterface es un método en el módulo readline de Node.js que se utiliza para crear una interfaz de lectura
//desde un flujo de entrada o un flujo de salida. En este caso se está utilizando para crear una interfaz de
//lectura desde el flujo estándar de entrada (process.stdin) y el flujo estándar de salida (process.stdout).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = {
  name: '',
  surname: '',
  age: 0
};

async function main() {
  try {
    // eliminar el archivo JSON existente
    await fs.unlink('#');
    
    // Obtener la opinion del usuario
    userData.name = await askQuestion('Ingresa tu nombre: ');
    userData.surname = await askQuestion('Ingresa tu apellido: ');
    userData.age = parseInt(await askQuestion('Ingresa tu edad: '), 10);

    // Escribir datos de usuario en un archivo JSON
    await fs.writeFile('#', JSON.stringify(userData));

    // Leer e imprimir datos de usuario desde un archivo JSON
    //Lee el contenido del archivo 'user.json'. El resultado se almacena en la variable 
    const fileData = await fs.readFile('#', 'utf-8');
    //Analiza el contenido del archivo como una cadena JSON y lo convierte en un objeto JavaScript. El resultado se almacena en la variable 
    const parsedData = JSON.parse(fileData);
    //Muestra por consola el mensaje (User Data) seguido del contenido del (objeto parsedData)
    console.log('User Data:', parsedData);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
  //Esto muestra los datos del usuario almacenados en el objeto parsedData.
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

main();



//Este código utiliza fs/promises para gestionar el sistema de 
//archivos de manera asíncrona y 
//readline con promesas para obtener la entrada del usuario.

//los bloques try, await, catch, y finally se utilizan para manejar la ejecución de código asíncrono y gestionar posibles errores

//try: Este bloque se utiliza para envolver el código que podría lanzar una excepción (error). Si ocurre un error dentro de este 
//bloque, se salta directamente al bloque catch. Si no hay errores, la ejecución continúa después del bloque try.

//await: Se utiliza para esperar a que una promesa se resuelva. En este caso, await se utiliza para esperar que las funciones de 
//fs/promises (como unlink, writeFile, y readFile) se completen antes de continuar con la ejecución del código

//catch: Este bloque se ejecuta si ocurre algún error dentro del bloque try. Proporciona un lugar para manejar y gestionar los errores.
//En el contexto del código, se utiliza para manejar errores que podrían ocurrir al intentar eliminar o leer archivos.

//finally: Este bloque se ejecuta siempre, independientemente de si se lanzó una excepción o no. 
//Es útil para realizar acciones que deben realizarse, sin importar si hay errores o no.

//(rl.close) para evitar que quede abierta después de la ejecución del programa.

//readline: Es un módulo en Node.js que proporciona una interfaz para leer datos de una secuencia de entrada, como la entrada del usuario desde la consola.
//createInterface: Es un método del módulo readline que crea una nueva interfaz de lectura. Recibe un objeto de opciones que especifica la secuencia de entrada y salida que se utilizarán.

//**Estamos creando una interfaz de lectura (rl) que utiliza el flujo estándar de entrada (process.stdin) para leer la entrada del usuario y el flujo estándar 
//de salida (process.stdout) para escribir la salida. Esta interfaz se utiliza luego para hacer preguntas al usuario y obtener respuestas de manera interactiva. */

//Por ejemplo, en la función askQuestion, se utiliza rl.question para realizar preguntas al usuario y obtener respuestas.
//Este método toma una pregunta como primer argumento y una función de devolución de llamada que maneja la respuesta del usuario.

//La función de devolución de llamada se envuelve en una promesa para facilitar la manipulación asíncrona de la entrada del usuario.


