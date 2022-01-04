const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('./text_2.txt');
const writeCompressStream = fs.createWriteStream('./compressed_text.txt');
const compressStream = zlib.createGzip();

//only read
// readStream.on('data', (chunk) => {
//     console.log('-----------');
//     console.log(chunk.toString());
// })

//write
// readStream.on('data', (chunk) => {
//     writeStream.write('\n_____CHUNK START______\n');
//     writeStream.write(chunk);
//     writeStream.write('\n_____CHUNK END______\n');
// })

const handleError = (err) => {
    console.log('Error');
    console.log(err);
    readStream.destroy();
    writeStream.end('Finished with error...')
}

// duplex (read&write)
// readStream
//     .on('error', handleError)
//     .pipe(writeStream)
//     .on('error', handleError);

//transform stream
readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeCompressStream)
    .on('error', handleError);

