"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const webRoutes = (app) => {
    router.get('/', (req, res) => {
        res.render('home');
    });
    router.get('/thanh', (req, res) => {
        res.send('Hello World thanh !');
    });
    app.use('/', router);
};
exports.default = webRoutes;
//# sourceMappingURL=web.js.map