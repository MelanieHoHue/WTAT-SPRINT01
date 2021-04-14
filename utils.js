"use strict";

const fs = require("fs"),
    customReadFile = (file_path, res) => {
        if(fs.existsSync(file_path)) {
            fs.readFile(file_path, (error, data) => {
                if (error) {
                    console.log("Error reading the file", error);
                }
                res.end(data);
            });
        }
    },
    contentTypeMap = {
        "html": {"Content-Type": "text/html"},
        "js": {"Content-Type": "text/javascript"},
        "css": {"Content-Type": "text/css"},
        "png": {"Content-Type": "image/png"},
        "plain": {"Content-Type": "text/plain"}
    },
    routeMap = {
        "/": "views/index.html",
        "/thanks": "views/thanks.html",
    };

module.exports = { customReadFile, contentTypeMap, routeMap};