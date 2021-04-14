"use strict";

const   http = require("http"),
        httpStatus = require("http-status-codes"),
        port = 3000,
        router = require("./router"),
        app = http.createServer(router.handle),
        fs = require("fs"),
        utils = require("./utils"),
        contentTypeMap = utils.contentTypeMap;

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);