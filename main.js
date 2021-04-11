const http = require("http");
const httpStatus = require("http-status-codes");
const port = 3000;

let responseMessage = "<h1>Hello, Universe!</h1>";

const app = http.createServer((req, res) => {

    console.log("Received an incoming request!");

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write(responseMessage);

    res.end();

    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);