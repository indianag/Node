const fs = require('fs/promises');
const path = require('path');
const readline = require('readline');
//Importa el módulo 'readline' para manejar la entrada del usuario


//CALLBACKS VS PROMESAS

//    ASYNC, AWAIT

// function question(prompt) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) => {
//     rl.question(prompt, (answer) => {
//       rl.close();
//       resolve(answer);
//     });
//   });
// }

// async function readConsole(callback) {
//   const name = await question('Ingresa tu nombre: ');
//   const surname = await question('Ingresa tu apellido: ');
//   const age = await question('Ingresa tu edad: ');

//   const userObj = { name, surname, age };
//   callback(userObj);
// }



//     THEN/CATCH

//Defino una función 'question' que devuelve una promesa para leer la entrada del usuario

function question(prompt) {
//// Creo una interfaz para leer y escribir en la consola
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//devuelvo una promesa que se resuelve con la respuesta del usuario o se rechaza si la respuesta está vacía
return new Promise((resolve, reject) => {
  rl.question(prompt, (answer) => {
    if(answer){
       // Cierro la interfaz si la respuesta no está vacía y resuelve la promesa
      rl.close();
      resolve(answer);
    } else {
       // Rechazar la promesa si la respuesta está vacía
      reject('la respuesta no puede estar vacia')
    }
  });
});
}


// Defino una función 'readConsole' que toma un callback como parametro y recopila la entrada del usuario
function readConsole(callback){
  // se le regunta al usuario por su nombre, luego encadena la promesa para el apellido y, finalmente, para la edad
  question('Ingresa tu nombre: ')
  .then((name) => {
    return question('Ingresa tu apellido: ');
  })
  .then((surname) => {
    return question('Ingresa tu edad: ');
  }) 
  .then((age) =>{
    //Una vez que se recopila toda la entrada, se crea un objeto con la información del usuario y se llama al callback
    const userObj = { name, surname, age};
    callback(userObj);
  })
  .catch((err) => {      
    // para capturar cualquier error durante el proceso, como una respuesta vacía, y registra el error
    console.error(`Error: ${err}`);    
  }) 
}





module.exports = {readConsole};




