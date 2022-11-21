"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const movie_schema_1 = require("../zod_schema/movie.schema");
const router = express_1.default.Router();
let movie = [];
router.get('/', (req, res, next) => {
    return res.status(200).json(movie);
});
router.post('/', (0, validate_1.default)(movie_schema_1.movieSchema), (req, res, next) => {
    const newpark = req.body;
    movie.push(newpark);
    return res.status(201).json({ message: ' Added !' });
});
router.put('/:id', (0, validate_1.default)(movie_schema_1.movieSchema), (req, res) => {
    const updatemovie = req.body;
    const { id } = req.params;
    const updatedmovie = movie.filter((i) => {
        return i.id !== id;
    });
    updatedmovie.push(updatemovie);
    movie = updatedmovie;
    return res.json({
        message: ' Updated !',
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delete1 = movie.filter((i) => {
        return i.id !== id;
    });
    movie = delete1;
    return res.json({
        message: 'deleted !',
    });
});
exports.default = router;
