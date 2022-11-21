"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const bank_schema_1 = require("../zod_schema/bank.schema");
const router = express_1.default.Router();
let bank = [];
router.get('/', (req, res, next) => {
    return res.status(200).json(bank);
});
router.post('/', (0, validate_1.default)(bank_schema_1.bankSchema), (req, res, next) => {
    const newpark = req.body;
    bank.push(newpark);
    return res.status(201).json({ message: ' Added !' });
});
router.put('/:id', (0, validate_1.default)(bank_schema_1.bankSchema), (req, res) => {
    const updatebank = req.body;
    const { id } = req.params;
    const updatedm = bank.filter((i) => {
        return i.id !== id;
    });
    updatedm.push(updatebank);
    bank = updatedm;
    return res.json({
        message: ' Updated !',
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delete1 = bank.filter((i) => {
        return i.id !== id;
    });
    bank = delete1;
    return res.json({
        message: 'deleted !',
    });
});
exports.default = router;
