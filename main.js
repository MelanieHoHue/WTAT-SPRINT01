"use strict";

const   http = require("http"),
        httpStatus = require("http-status-codes"),
        port = 3000,
        app = http.createServer(),
        routeResponseMap = {
            "/info": "<h1>Info Page</h1>",
            "/contact": "<h1>Contact Us</h1>",
            "/about": "<h1>Learn More About Us.</h1>",
            "/hello": "<h1>Say hello by emailing us here</h1>",
            "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
        };

let responseMessage = "";

const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
}

app.on("request", (req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if(routeResponseMap[req.url]) {
        responseMessage = routeResponseMap[req.url]
    } else {
        responseMessage = "<h1>Welcome!</h1>";
    }

    res.end(responseMessage), 20000
});

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);