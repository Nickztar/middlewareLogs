const fs = require("fs");

module.exports = {
    saveFile: (fileName, content)=>{
        return new Promise((resolve, reject)=>{
            fs.writeFile(fileName, content, (err)=>{
                err ? reject("Error") : resolve("file updated");
            });
        });
    }, getFileContent: (fileName)=>{
        return new Promise((resolve, reject)=>{
            fs.readFile(fileName, (err, data)=>{
                err ? reject(err) : resolve(data.toString());
            });
        });
    }
}