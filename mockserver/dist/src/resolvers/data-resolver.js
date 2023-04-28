"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataResolver = void 0;
const db_json_1 = __importDefault(require("../../database/db.json"));
function dataResolver(req, res) {
    const data = db_json_1.default;
    res.send(data);
}
exports.dataResolver = dataResolver;
//# sourceMappingURL=data-resolver.js.map