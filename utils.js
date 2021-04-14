"use strict";

const fs =          require("fs"),
    httpStatus =    require("http-status-codes"),
    contentTypes =  require("./contentTypes");

module.exports = {
    getFile: (file, res) => {
        console.log("file", file);
        fs.readFile(`/${file}`, (error, data) => {
            // TODO: refactor into try - catch
            if (error) {
                res.writeHead(500, contentTypes.html);
                res.end("<h1>An error occured serving the file</h1>");
            } else {
                res.end(data);
            }
        });
    }
};