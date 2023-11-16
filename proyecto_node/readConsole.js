const readline = require('readline');

function readConsole(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //preguntar por consola nombre, apellido y edad//
    rl.question('name:', (name) => {
        rl.question('surname:', (surname) => {
            rl.question('age:', (age) => {

                //crear objeto literal
                const userObj = { name, surname, age };
                //aplicar callback
                callback(userObj);

                //cerrar la interfaz de lectura
                rl.close();
            });
        });
    });
}
module.exports = readConsole;
