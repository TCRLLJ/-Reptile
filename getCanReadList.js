var request = require('request');
download = (temp)=> {
    request('http://www.hzcourse.com/resource/readBook?path=/openresources/teach_ebook/uncompressed/'+temp+'/OEBPS/Text/chapter.xhtml', (err, data)=>{
        if (err) {
            console.log(err);
            return;
        }
        if (data.body != "Failed to load resource: File Not Found") {
            console.log(temp)
        }
    })
}
let i = 0;
setInterval(()=>{
    console.log(i);
    download(++i);
}, 75)