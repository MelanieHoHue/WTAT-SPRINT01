"use strict";

const   http = require("http"),
        httpStatus = require("http-status-codes"),
        port = 3000,
        app = http.createServer();

let responseMessage = "<h1>This will be shown</h1>";

const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
}

app.on("request", (req, res) => {

    var body = [];
    
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });

    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request´s body content: ${body}`);
    });

    console.log("Received an incoming request!");
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`Url: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(responseMessage);

    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);