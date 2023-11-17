const fs = require('fs/promises');

async function writeAndRead(path, obj) {
  try {
    // Escribir en el fichero
    await fs.writeFile(path, JSON.stringify(obj));
    console.log(`El objeto se ha escrito en ${path}`);

    // Leer el fichero y mostrarlo por consola
    const fileContent = await fs.readFile(path, 'utf8');
    const readObj = JSON.parse(fileContent);
    console.log('Leer el objeto del archivo:', readObj);
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = writeAndRead;