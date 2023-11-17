const fs = require('fs/promises');
const readline = require('readline');

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

async function readConsole(callback) {
  const name = await question('Ingresa tu nombre: ');
  const surname = await question('Ingresa tu apellido: ');
  const age = await question('Ingresa tu edad: ');

  const userObj = { name, surname, age };
  callback(userObj);
}

module.exports = readConsole;