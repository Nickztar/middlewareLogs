const file = require("./fileIO");

module.exports = async(req, res, next) => {
    const urls = req.url;
    try{
        let promise = await file.getFileContent(__dirname+"/log.json");
        promise =  JSON.parse(promise);
        promise.push({url: urls, date: Date.now()});
        try {
            await file.saveFile(__dirname + "/log.json", JSON.stringify(promise, null, 2));

        } catch (error) {
            res.send(error);
        }
    }
    catch(error){
        res.send(error);
    };
    next();
}