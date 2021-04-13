"use strict";

const   http = require("http"),
        httpStatus = require("http-status-codes"),
        port = 3000,
        router = require("./router"),
        app = http.createServer(router.handle),
        fs = require("fs"),
        routeMap = {
            "/": "views/index.html"
        },
        getViewUrl = (url) => {
            return `views${url}.html`;
        },
        getJSONString = (obj) => {
            return JSON.stringify(obj, null, 2);
        },
        sendErrorResponse = (res) => {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end("<h1>Page not found</h1>");
        },
        contentTypeMap = {
            "html": {"Content-Type": "text/html"},
            "js": {"Content-Type": "text/javascript"},
            "css": {"Content-Type": "text/css"},
            "png": {"Content-Type": "image/png"},
            "plain": {"Content-Type": "text/plain"}
        },
        customReadFile = (file_path, res) => {
            if(fs.existsSync(file_path)) {
                fs.readFile(file_path, (error, data) => {
                    if (error) {
                        console.log("Error reading the file", error);
                    }
                    res.end(data);
                });
            }
        };

let url = "",
    viewUrl = "",
    contentType = "";


router.get("/", (req, res) => {
    res.writeHead(200, contentTypeMap["plain"]);
    res.end("INDEX");
});

router.get("index.html", (req, res) => {
    res.writeHead(200, contentTypeMap["html"]);
    customReadFile(routeMap["/"], res);
});

router.post("/", (req, res) => {
    res.writeHead(200, contentTypeMap["plain"]);
    res.end(("POSTED"));
});

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);

module.exports = {customReadFile, contentTypeMap};