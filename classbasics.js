
const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit("messageLoggedAgain", {id: 2, url: "website"}); //raise an event based on the class
    }


}

module.exports = Logger;