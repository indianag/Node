console.log("Mensaje 1");

setTimeout(function(){
    console.log("Mensaje 2");

        setTimeout(function (){
            console.log("Mensaje 3")
        })
},3000);

const fs = require('fs');
//objeto a guardar en el json
let persona = {
    name: "Nombre",
    surname: "Apellido",
    age: 25,
};
// convertir el objeto a formato JSON
let jsonPersona = JSON.stringify(persona);

//Escribir el OBJETO EN UN ARCHIVO JSON//
fs.writeFile('persona.json', jsonPersona, (err) => {
    if (err) {
        console.error("Error al escribir el archivo:", err);
        return;
    } 
    console.log('archivo guardado exitosamente.')});

// leer el archivo JSON
fs.readFile("persona.json", (err, data) => {
    if (err) {
        console.error("Error al leer el archivo:", err);
        return;
    }   //convertir el JSON a objeto
    let readPersona = JSON.parse(data);
    console.log("Objeto leído del archivo:", readPersona); 
});


//declarar nuestra variable que requiere de nueestro modulo READLINE
const readline = require('readline');
//crear una interfaz de lectura desde la consola
//funcionalidad que nos permite mapear dos procesos (process.stdin, process.stdout)
//declaro una variable para guardar mi metodo que crea una interfa para poder manipular (process.stdin, process.stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//busco una funcion que me permita solicitar un input y escribir un output
//preguntar al usuario por nombre, apellido y edad
rl.question("Ingrese el nombre:", (name) => {
    // persona.name = name;
    rl.question("Ingrese el apellido:", (surname) => {
        // persona.surname = surname;
        rl.question("Ingrese la edad:", (age) => {
            // persona.age;
            //crear un objeto con los valores proporcionados
            let persona = {
                name: name,
                surname: surname,
                age: parseInt(age) // convertir la entrada de edad a numero
            };
            // convertir el formato a JSON 
            let jsonPersona = JSON.stringify(persona);
            fs.writeFile('persona.json', jsonPersona, (err) => {
                if (err) {
                    console.error("Error al escribir el archivo:", err);
                    return;
                } 
                console.log('archivo guardado exitosamente.')});
            fs.readFile("persona.json", (err, data) => {
                if (err) {
                    console.error("Error al leer el archivo:", err);
                    return;
                } 
                let readPersona = JSON.parse(data);
                console.log("Objeto leído del archivo:", readPersona); 
                //cerrar la interfaz de lectura
                rl.close();
            });
        });
    });
})
