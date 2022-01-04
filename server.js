const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res)=>{
    console.log('Server request');
    console.log(req.url, req.method);

    // res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Type', 'application/json')
    // res.write('<link rel="stylesheet" href="#">');
    // res.write('<h1>Hello world!</h1>');
    // res.write('<p>My name is Nastia!</p>');
    const data = JSON.stringify([
        {id: 1, text: 'Some text'},
        {id: 2, text: 'Some text 2'}
    ]);
    // res.write(data);

    res.end(data);
})

server.listen(PORT, 'localhost', (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Listening port ${PORT}`);
    }
})