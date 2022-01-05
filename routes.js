const getPath = require('./helper');

const indexPath = getPath('index');

const routes = new Map([
    ['/', indexPath],
    ['/home', indexPath],
    ['/index.html', indexPath],
    ['/contacts', getPath('contacts')],
    ['/error', getPath('error')],
])

module.exports = routes;