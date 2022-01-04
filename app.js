const Logger = require('./ls/logs');
// const EventEmitter = require('events');

// from constructor new instance
const logger = new Logger();

// new instance
// const emitter = new EventEmitter();

//watch event
logger.on('some_event', (args) => {
    const {id, text} = args;

    console.log(id,  text)
})

// call event with args
// emitter.emit('some_event', {id: 1, text: 'Some text'})

logger.log('User logged');