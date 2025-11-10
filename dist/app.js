"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const web_1 = __importDefault(require("./routes/web"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '../src/views');
// //config routes
(0, web_1.default)(app);
// app.get("/", (req, res) => {
//     res.render("home.ejs")
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(".env port: ", process.env.PORT);
});
//# sourceMappingURL=app.js.map