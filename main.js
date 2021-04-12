"use strict";

const   http = require("http"),
        httpStatus = require("http-status-codes"),
        port = 3000,
        app = http.createServer(),
        fs = require("fs"),
        routeMap = {
            "/": "views/index.html"
        };

let responseMessage = "";

const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
}

app.on("request", (req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if(routeMap[req.url]) {
        fs.readFile(routeMap[req.url], (error, data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.end("<h1>Sorry! Page not found!</h1>");
    }
});

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);