"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
const zod_1 = require("zod");
exports.studentSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z
            .string({ required_error: 'ID is required !' })
            .min(3, 'You id must be more than 3'),
        name: zod_1.z
            .string({ required_error: 'name is required !' })
            .min(3, 'You name must be more than 3 char'),
        major: zod_1.z.enum(['IT', 'IS', 'CS', 'SWE'], { required_error: 'type is required and must be one of this (IT, IS,CS,SWE)!' }),
        Level: zod_1.z.number({ required_error: 'number is required !' })
            .min(1, 'you must be between 1-8').max(8, 'you must be between 1-8 '),
        GPA: zod_1.z.number({ required_error: 'GPA is required !' })
            .min(0, 'you must be between 0-5').max(5, 'you must be between 0-5 ')
    }),
});
