"use strict";

const httpStatus =  require("http-status-codes"),
    contentTypes =  require("./contentTypes"),
    utils =         require("./utils"),
    routes = {
        "GET": {},
        "POST": {}
    },
    handle = (req, res) => {

        let method = req.method,
            url = req.url;
        console.log("url", url);
        try {
            routes[method][url](req, res);
        } catch (e) {
            console.log("error", e);
            res.writeHead(200, contentTypes.html);
            utils.getFile("views/error.html", res);
        }
    },
    get = (url, action) => {
        routes["GET"][url] = action;
    },
    post = (url, action) => {
        routes["POST"][url] = action;
    };

module.exports = { handle, get, post };