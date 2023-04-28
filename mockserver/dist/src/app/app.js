"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressApp = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const data_resolver_1 = require("../resolvers/data-resolver");
const homePath = '/';
class ExpressApp {
    constructor() {
        this.app = (0, express_1.default)();
        this.initRoutes();
    }
    initRoutes() {
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");
            next();
        });
        this.app.get(homePath, data_resolver_1.dataResolver);
    }
    createServer() {
        const httpServer = http_1.default.createServer(this.app);
        return {
            httpServer,
        };
    }
}
exports.ExpressApp = ExpressApp;
//# sourceMappingURL=app.js.map