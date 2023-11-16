const fs = require('fs');
function writeAndRead(path, obj) {
    const jsonString = JSON.stringify(obj);

    fs.writeFileSync(path, jsonString);

    const content = fs.readFileSync(path);
    const parsedObject = JSON.parse(content);
    console.log(parsedObject); 
}

module.exports = { writeAndRead };
