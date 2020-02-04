var fs = require('fs')
var exec = require('child_process').exec;

fs.readdir(__dirname + '/html', async (err, file) =>{
    console.log(file.length)
    for (var i = 0; i < file.length; i++) {
        console.log('wkhtmltopdf.exe ' + __dirname + '/html/'+ file[i] + ' ' + __dirname + '/html/'+ file[i] + '.pdf')
        todo = () =>{
            return new Promise(resolve =>{
                exec('wkhtmltopdf.exe ' + __dirname + '/html/'+ file[i] + ' ' + __dirname + '/html/'+ file[i] + '.pdf', (error, stdout, stderr) => {
                    console.log(error, stdout, stderr)
                    resolve()
                })
            })
        }
        await todo();
    }
})

// delete kongge
// fs.readdir(__dirname + '/temp', async (err, file) =>{
//     console.log(file.length)
//     file.forEach(i =>{
//         // i = i.replace(/\s/g, '');
//         fs.rename(__dirname + '/temp/' + i, __dirname + '/temp/' + i.replace(/\s/g, ''), err => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             console.log('update success')
//         })
//     })
// })