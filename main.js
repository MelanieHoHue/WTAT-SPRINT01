const utils = require("./utils");

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    contentTpyes = require("./contentTypes"),
    util = require("./utils"),
    app = http.createServer(router.handle);

router.get("/", (req, res) => {
    res.writerHead(200, contentTpyes.html);
    utils.getFile("views/index.html", res);
});

router.get("/contact", (req, res) => {
    res.writerHead(200, contentTpyes.html);
    utils.getFile("views/contact.html", res);
});

router.get("/project-idea", (req, res) => {
    res.writerHead(200, contentTpyes.html);
    utils.getFile("views/project-idea.html", res);
});

app.listen(port);
console.log(`The server has started and is listening on port : ${port}`);