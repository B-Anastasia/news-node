// console.log(global);

// setTimeout(()=>{
//     console.log('Hello')
// }, 2000)

// console.log(__dirname);
// console.log(__filename);

// console.log(`Hello ${process.argv[3]}`);

// const myURL = new URL('https://example.org/abc?123');
// console.log(myURL.search);
// console.log('😸 ~ myURL.hostname', myURL.hostname);
// console.log(myURL.port);
// console.log(myURL.href);

const pathname = '/a/b/c';
const search = '?d=e';
const hash = '#fgh';
const myURL = new URL(`https://example.org${pathname}${search}${hash}`);

// console.log('😸 ~ myURL', myURL);
// console.log(myURL.search);
// console.log(myURL.searchParams);

const myUrl = new URL('https://example.org/abc?foo=~bar');
console.log('😸 ~ myUrl', myUrl);
console.log( myUrl.searchParams.get('foo'));