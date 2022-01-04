const EventEmitter = require('events');

// new instance
// const emitter = new EventEmitter();
// class instead new instance

// constructor
class Logger extends EventEmitter {
    log = (data) => {
        console.log(data);

        // call event with args
        this.emit('some_event', {id: 1, text: 'Some text'})
    }
}

module.exports = Logger;