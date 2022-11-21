"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const student_schema_1 = require("../zod_schema/student.schema");
const router = express_1.default.Router();
let student = [];
router.get('/', (req, res, next) => {
    return res.status(200).json(student);
});
router.post('/', (0, validate_1.default)(student_schema_1.studentSchema), (req, res, next) => {
    const newstudent = req.body;
    student.push(newstudent);
    return res.status(201).json({ message: ' Added !' });
});
router.put('/:id', (0, validate_1.default)(student_schema_1.studentSchema), (req, res) => {
    const updatedstudent = req.body;
    const { id } = req.params;
    const updatesu = student.filter((i) => {
        return i.id !== id;
    });
    updatesu.push(updatedstudent);
    student = updatesu;
    return res.json({
        message: ' Updated !',
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delete1 = student.filter((i) => {
        return i.id !== id;
    });
    student = delete1;
    return res.json({
        message: 'deleted !',
    });
});
exports.default = router;
