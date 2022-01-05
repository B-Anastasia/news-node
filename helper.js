const path = require('path');

const getPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

module.exports = getPath;