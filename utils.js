"use strict";

const fs = require("fs"),
    customReadFile = (file_path, res) => {
        
        let file = file_path.toString();

        console.log("file:", file);
        console.log("exists:", fs.existsSync(file));

        fs.readFile(file, (error, data) => {
            if (error) {
                console.log("Error reading the file", error);

                res.writeHead(500, contentTypeMap["html"]);
                res.end("Error reading the file", file);
            }

            res.end(data, "UTF-8");
        });
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
        "app.css": "public/css/app.css",
        "Mock-1.png": "public/images/WTAT-Project-Mock-1.png",
        "Mock-2.png": "public/images/WTAT-Project-Mock-2.png",
        "Mock-3.png": "public/images/WTAT-Project-Mock-3.png",
        "Mock-4.png": "public/images/WTAT-Project-Mock-4.png",
        "Mock-5.png": "public/images/WTAT-Project-Mock-5.png",
    };

module.exports = { customReadFile, contentTypeMap, routeMap};