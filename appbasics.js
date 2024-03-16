function helloWorld(message){
    console.log(message); //global object
}

helloWorld("print"); //never let them see your next move

//--------------------------------------------------------------------------------------------------------------------------
//console.log(module);

//------------------------------------- LOADING A MODULE -------------------------------------------------------------------
console.log("EXECUTING BASICS OF LOADING A MODULE: ");

const otherModule = require('./loggerbasics'); //require is the function that actually imports that information, in this case, I renamed the
//module to "otherModule"
//set to constant to avoid overwriting/reassigning

console.log(otherModule); //checks what is available from the module, based on the exports made

otherModule.log("Hello other World!");

//------------------------------------ USING BUILT IN MODULES -------------------------------------------------------------
console.log("EXECUTING BASICS BUILT IN MODULES: ");

const path = require('path'); //loads the built in module "path"

//console.log(path); //shows what is available from path

var pathObj = path.parse(__filename);
console.log(pathObj);

const Os = require("os");
var freeMemory = Os.freemem();
var totalMemory = Os.totalmem();

console.log("Free Memory: " + freeMemory);
console.log("Total Memory: " + totalMemory);

const Fs = require("fs");
Fs.readdir("./", function(err, files) {
    if (err) console.log("Error: " + err);
    else console.log("Result", files);
}) //always prefer asynchronous methods, as they can handle more request at once, maximizing the single thread aspect of node

//---------------------------------------------- EVENTS --------------------------------------------------------------------
console.log("EXECUTING BASICS OF EVENTS AND EVENT HANDLERS: ");

const EventEmitter = require("events");
const emitter = new EventEmitter();

var response = function messageReceived(arg) {
    console.log("msg received, ", arg);
}

emitter.on("messageLogged", function(){console.log("msg received");}); 
emitter.on("messageLogged", response); //Listener, response to the signal and therefore to the event
emitter.emit("messageLogged", { id: 1, url: "website" }); //signals that an event has happened

//-------------------------------------------- CLASSES AND EVENTS ------------------------------------------------------------
console.log("EXECUTING BASICS OF CLASSES AND EVENTS: ");

const Logger = require("./classbasics");
const logging = new Logger();

var otherresponse = function msgReceived(othermessage) {
    console.log("msg received again, ", othermessage)
}

logging.on("messageLoggedAgain", otherresponse);

logging.log("messagehere");

//-------------------------------------------- HTTP MODULES --------------------------------------------------------------------
console.log("EXECUTING BASICS OF HTTP MODULES: ");

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    }

    if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}); //createServer is considered an event module, therefore inhereting all capabilities of an event

//server.on("connection", (socket) => {console.log("New Connection...")}); //tests events capabilities

server.listen(3000);

console.log("Listening on port 3000...");