"use strict";

const httpStatus =      require("http-status-codes"),
    utils =             require("./utils"),
    contentTypes =      utils.contentTypeMap,
    customReadFile =    utils.customReadFile,
    routeMap =          utils.routeMap,
    handle = (req, res) => {

        let method = req.method,
            url = req.url;

        try {
            
            if (routes[method][url]){
                routes[method][url](req, res);
            } else {
                res.writeHead(404, contentTypes["html"]);
                res.end("<h1>No such file found</h1>");
            }

        } catch (ex) {
            console.log("error", ex);
        }
    },
    get = (url, action) => {
        routes["GET"][url] = action;
    },
    post = (url, action) => {
        routes["POST"][url] = action;
    },
    routes = {
        "GET": {
            "/": (req, res) => {
                res.writeHead(200, contentTypes["html"]);
                customReadFile(routeMap["/"], res);
            },
            "/index": (req, res) => {
                res.writeHead(200, contentTypes["html"]);
                customReadFile(routeMap["/"], res);
            },
            "/info": (req, res) => {
                res.writeHead(200, contentTypes["html"]);
                customReadFile(routeMap["info"], res);
            },
            "/public/css/bootstrap.min.css": (req, res) => {
                res.writeHead(200, contentTypes["css"]);
                customReadFile(routeMap["bootstrap.css"], res);
            },
            "/public/css/app.css": (req, res) => {
                res.writeHead(200, contentTypes["css"]);
                customReadFile([routeMap["app.css"]], res);
            }
        },
        "POST": {
            "/": (req, res) => {
                res.writeHead(200, contentTypes["html"]);
                customReadFile(routeMap["/thanks"], res);
            }
        }
    };

module.exports = { handle, get, post };