const fs = require('fs');

fs.readFile('./text.txt', 'utf-8', (err, data)=>{
        fs.mkdirSync('./files', ()=>{});
        fs.writeFileSync('./files/text2.txt', data, (err, data)=>{
            if(err){
                console.log(err);
            }
        })
})

// fs.readFile('./text.txt', 'utf-8', async (err, data)=>{
//         await fs.mkdir('./files', ()=>{});
//         await fs.writeFile('./files/text2.txt', data, (err, data)=>{
//             if(err){
//                 console.log(err);
//             }
//         })
    // if(err){
    //     throw Error();
    // } else {
    //     fs.mkdir('./files', ()=>{
    //         fs.writeFile('./files/text_2.txt', data, (err, data)=>{
    //             if(err){
    //                 throw new Error('Write file error '+ err);
    //             }
    //         })
    //     })
    //
    // }
// })

// remove all files and folder
setTimeout(()=>{
    if(fs.existsSync('./files/text2.txt')){
        fs.rm('./files',  { recursive: true }, (err)=>{
            if(err){
                console.log(err);
            }
        });
    }
}, 4000);

// setTimeout(()=>{
//     if(fs.existsSync('./files/text2.txt')){
//         fs.unlink('./files/text2.txt', (err)=>{
//             if(err){
//                 console.log(err);
//             }
//         });
//     }
// }, 4000)
//
// setTimeout(()=>{
//     if(fs.existsSync('./files')){
//         fs.rmdir('./files', (err)=>{
//             if(err){
//                 console.log(err)
//             }
//         });
//     }
// }, 6000)

console.log('First')