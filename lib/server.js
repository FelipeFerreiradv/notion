"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server = (0, http_1.createServer)(function () {
    console.log("listen");
});
server.listen(3001);
