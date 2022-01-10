const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = 3000;

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`Listening port ${PORT}`);
    }
});

app.get('/', (req, res)=>{
    res.sendFile(routes.get('/'))
});

app.get('/contacts', (req, res)=>{
    res.sendFile(routes.get('/contacts'))
});

app.get('/about-us', (req, res)=>{
    res.redirect('/contacts');
});

app.use((req, res)=>{
    res
        .status(404)
        .sendFile(routes.get('/error'))
});