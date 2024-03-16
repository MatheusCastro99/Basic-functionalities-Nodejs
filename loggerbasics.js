
const EventEmitter = require("events");
const emitter = new EventEmitter();

var url = "http.//mylogger.io/log" //fictional

function log(message){
    console.log(message);

    
}

module.exports.log = log; //this will make the variable/function public, granting access to other modules to read and use
module.exports.address = url; // you can also rename the variable in the process