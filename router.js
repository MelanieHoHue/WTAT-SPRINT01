const httpStatus = require("http-status-codes"),
    htmlContentType = {
        "Content-Type": "text/html"
    },
    routes = {
        "GET": {
            "/info": (req, res) => {
                res.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                res.end("Welcome to the Info Page!");
            }
        },
        "POST": {}
    },
    handle = (req, res) => {
        let method = req.method,
            url = req.url;

        console.log(method);
        console.log(url);
        console.log(routes[method][url]);

        try {
            
            if (routes[method][url]){
                routes[method][url](req, res);
            } else {
                res.writeHead(404, htmlContentType);
                res.end("<h1>No such file found</h1>");
            }

        } catch (ex) {
            console.log("error", ex);
        }
    },
    get = (url, action) => {
        routes["GET"][url] = action;
    }
    post = (url, action) => {
        routes["POST"][url] = action;
    };

module.exports = {handle, get, post};