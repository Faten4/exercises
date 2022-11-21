"use strict";
"//@ts-expect-error";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
const bank_routes_1 = __importDefault(require("./routes/bank.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/movie', movie_routes_1.default);
app.use('/api/v1/student', student_routes_1.default);
app.use('/api/v1/bank', bank_routes_1.default);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server listeng on port ${PORT}`);
});
