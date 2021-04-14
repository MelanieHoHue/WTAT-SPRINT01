"use strict";

const fs =  require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (data) {
                res.end(data);
            } else if (error) {
                res.writeHead(500, contentTypes.html);
                res.end("<h1>An error occured serving the file</h1>");
            }
        });
    }
};