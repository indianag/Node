const wr = require('./writeAndReadObject');
const rd = require('./readConsole');


rd.readConsole( function(obj){
    wr.writeAndRead("./index.json", obj);
})


