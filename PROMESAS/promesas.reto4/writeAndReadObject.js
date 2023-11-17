const fs = require('fs/promises');
const {promises: fsPromises } = require('fs');

// async function writeAndRead(path, obj) {
//   try {
//     // Escribir en el fichero
//     await fs.writeFile(path, JSON.stringify(obj));
//     console.log(`El objeto se ha escrito en ${path}`);

//     // Leer el fichero y mostrarlo por consola
//     const fileContent = await fs.readFile(path, 'utf8');
//     const readObj = JSON.parse(fileContent);
//     console.log('Leer el objeto del archivo:', readObj);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }


function writeAndRead(path, obj) {
  fsPromises.writeFile(path, JSON.stringify(obj))
    .then(() => {
      console.log(`El objeto se ha escrito en ${path}`);
      // Después de escribir, leer el contenido del archivo
      return fsPromises.readFile(path, 'utf8');
    })
    .then((fileContent) => {
      const readObj = JSON.parse(fileContent);
      console.log('Leer el objeto del archivo:', readObj);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


module.exports = {writeAndRead};






























// function writeAndRead(path, obj){
//   fswriteFile(path, obj)
//     .then(() => {
//       return fs.readFile(path)
//     } )
//     .then((data) => {
//       const readObj = JSON.parse(data);
//       console.log(readObj)
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }