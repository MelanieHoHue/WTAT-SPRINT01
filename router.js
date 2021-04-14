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
            "/info": (req, res) => {
                res.writeHead(200, contentTypes["plain"]);
                res.end("Welcome to the Info Page!");
            },
            "/": (req, res) => {
                res.writeHead(200, contentTypes["html"]);
                customReadFile(routeMap["/"], res);
            },
            "/index": (req, res) => {
                res.writeHead(200, contentTypes["html"]);
                customReadFile("views/index.html", res);
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