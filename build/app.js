"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware_1 = require("./APIs/middlewares/errorHandlerMiddleware");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./APIs/routes/index"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
require('./APIs/config/database_config')();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api', index_1.default);
app.use(errorHandlerMiddleware_1.errorHanlder);
app.use(errorHandlerMiddleware_1.notFoundHandler);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
