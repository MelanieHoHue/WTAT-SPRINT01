"use strict";

const fs = require("fs"),
    customReadFile = (file_path, res) => {
        console.log(file_path);
        if(fs.existsSync(file_path)) {
            console.log(fs.existsSync(file_path));
            fs.readFile(file_path, (error, data) => {
                console.log(file_path);
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
        "info": "views/info.html",
        "thanks": "views/thanks.html",
        "bootstrap.css": "public/css/bootstrap.min.css",
        "app.css": "public/css/app.css"
    };

module.exports = { customReadFile, contentTypeMap, routeMap};