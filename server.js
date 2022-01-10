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