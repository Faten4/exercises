"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankSchema = void 0;
const zod_1 = require("zod");
exports.bankSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z
            .string({ required_error: 'ID is required !' })
            .min(3, 'You id must be more than 3'),
        Username: zod_1.z
            .string({ required_error: 'name is required !' })
            .min(6, 'You name must be more than 6 char'),
        Password: zod_1.z
            .string({ required_error: 'password is required !' }),
        Balance: zod_1.z
            .number({ required_error: 'number is required !' })
    }),
});
