const os = require('os');
const {userName, sayHello} = require('./test');

console.log('😸 ~ user', userName, sayHello(userName));

console.log('😸 ~ os.platform(), os.release()', os.platform(), os.release());
