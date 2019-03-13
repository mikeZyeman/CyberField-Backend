"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var api = /** @class */ (function () {
    function api() {
        this.app = express_1.default();
        // @ts-ignore
        this.http = http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.http);
        this.app.get('/', function (req, res) {
            res.send("<h1>Hello world!</h1>");
        });
        this.http.listen(3000, function () {
            console.log('listening on *:3000');
        });
    }
    return api;
}());
exports.api = api;
