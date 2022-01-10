const http = require('http');
const fs = require('fs');
const routes = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res)=>{
    console.log('Server request');
    console.log('Server test');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    console.log(__dirname);

    if(req.url === '/about-us') {
        res.statusCode = 301;
        res.setHeader('Location', '/contacts');
        res.end();
        return;
    }

    let basePath = routes.get(req.url);

    if(!basePath) {
        basePath = routes.get('/error');
        res.statusCode = 404;
    }

    console.log(basePath);

    fs.readFile(basePath, (err, data)=>{
        if(err){
            console.log(err);
            res.statusCode = 500;
        } else {
            res.write(data);
        }
        res.end();
    })
})

server.listen(PORT, 'localhost', (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Listening port ${PORT}`);
    }
})

// const Logger = require('./ls/logs');
// const EventEmitter = require('events');

// from constructor new instance
// const logger = new Logger();

// new instance
// const emitter = new EventEmitter();

//watch event
// logger.on('some_event', (args) => {
//     const {id, text} = args;
//
//     console.log(id,  text)
// })

// call event with args
// emitter.emit('some_event', {id: 1, text: 'Some text'})

// logger.log('User logged');