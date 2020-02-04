var fs = require('fs')

fs.readdir(__dirname + '/html', async (err, file) =>{
    console.log(file.length)
    file.forEach(i =>{
        let url = __dirname + '/html/' + i
        fs.readFile(url, (err, data) =>{
            // console.log('正在检查' + url)
            if (err) {
                console.log(err);
            }
            if (data.indexOf('uncompressed/ ') != -1) {
                console.log(url + '该文件有误\n正在修复')
                // console.log(data.indexOf('uncompressed/ '))
                data = data.toString()
                data = data.replace(/uncompressed\/\s/g, 'uncompressed/')
                // console.log(data.indexOf('uncompressed/ '))
                fs.writeFile(url, data, (err) =>{
                    if (err) console.log(err);
                    else {
                        console.log(url + '修复成功')
                    }
                })
            }
            if (data.indexOf('The proxy server received an invalid')!= -1) {
                console.log(i)
            }
        })
    })
})