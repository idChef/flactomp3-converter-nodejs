//wrriten in v8.9.4

const fs = require('fs');
const path = require('path');
const f2m = require('flac-to-mp3');
const mv = require('mv');
let toConvert = []
createDir()

const readFiles = () => {
    fs.readdir(__dirname, (err, files) => {
    files.forEach((file) => {
        if(path.extname(file) == '.flac'){
            toConvert.push(file)
        }
    })
    //Time for converting now
    console.log(`Found files`)
    console.log(toConvert)
    console.log('converting...')
    toConvert.forEach((file) => {
        f2m.convert(
            file,
            function(data) {
                console.log('...')
            }   
        )

    })
})
}

/*const createDir = () => {
    fs.mkdir(__dirname + '/output', ()=>{
        console.log('created output directory')
    })
}

const moveFiles = () => {
    fs.readdir(__dirname, (err, files) => {
        files.forEach((file) => {
            if(path.extname(file) == '.mp3'){
                mv(file, __dirname + '/output/' + file, function(err) {
                    console.log('done')
                });
            }
        })
    })
}*/


readFiles()

