"use strict";

const   http = require("http"),
        httpStatus = require("http-status-codes"),
        port = 3000,
        app = http.createServer(),
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
            "png": {"Content-Type": "image/png"}
        },
        customReadFile = (file_path, res) => {
            if(fs.existsSync(file_path)) {
                fs.readFile(file_path, (error, data) => {
                    if (error) {
                        console.log(error);
                        sendErrorResponse(res);
                        return;
                    } else {
                        res.write(data);
                        res.end();
                    }
                });
            } else { sendErrorResponse(res); }
        };

let url = "",
    viewUrl = "",
    contentType = "";

app.on("request", (req, res) => {

    url = req.url;
    viewUrl = getViewUrl(req.url);
    
    if (url.indexOf(".html") !== -1) {
        contentType = getJSONString(contentTypeMap["html"]);
        res.writeHead(200, contentTypeMap["html"]);
        customReadFile(`./views${url}`, res);
    } else if (url.indexOf("css") !== -1) {
        contentType = getJSONString(contentTypeMap["js"]);
        res.writeHead(200, contentTypeMap["js"]);
        customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf("css") !== -1) {
        contentType = getJSONString(contentTypeMap["css"]);
        res.writeHead(200, contentTypeMap["css"]);
        customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf("png") !== -1) {
        contentType = getJSONString(contentTypeMap["png"]);
        res.writeHead(200, contentTypeMap["png"]);
        customReadFile(`./public/images${url}`, res);
    } else {
        sendErrorResponse(res);
    }
});

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);