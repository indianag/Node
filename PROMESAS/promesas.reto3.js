const fs = require('fs/promises');
const readline = require('readline');

// Función para leer desde la consola con readline y devolver una promesa
function question(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Función principal para ejecutar el proceso
async function main() {

  try {
  // Preguntar al usuario por name, surname y age
  const name = await question('Ingresa tu nombre: ');
  const surname = await question('Ingresa tu apellido: ');
  const age = await question('Ingresa tu edad: ');

  // Crear un objeto con los valores proporcionados
  const userObj = { name, surname, age };

    // Convertir el objeto a JSON y guardarlo en un archivo
    await fs.writeFile('./user.json', JSON.stringify(userObj));
  
    // Leer el archivo y mostrar el contenido por consola
    const fileContent = await fs.readFile('./user.json', 'utf8');
    const readObj = JSON.parse(fileContent);
    console.log('Leer el objeto del archivo:', readObj);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llamar a la función principal
main();



//Este código utiliza las funciones de readline para solicitar información 
//al usuario, crea un objeto con esos valores y luego lo guarda en un archivo JSON 
//usando fs.promises.writeFile. Luego, lee el contenido del archivo JSON con 
//fs.promises.readFile y muestra el objeto por consola