"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSchema = void 0;
const zod_1 = require("zod");
exports.movieSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z
            .string({ required_error: 'ID is required !' })
            .min(3, 'You id must be more than 3'),
        name: zod_1.z
            .string({ required_error: 'name is required !' })
            .min(3, 'You name must be more than 3 char'),
        genre: zod_1.z.enum(['Drama', 'Action', 'Comedy'], { required_error: 'type is required and must be one of this (Drama, Action, Comedy)!' }),
        rating: zod_1.z.number({ required_error: 'number is required !' })
            .min(1, 'you must be between 1-5 ').max(5, 'you must be between 1-5 '),
        duration: zod_1.z.number({ required_error: 'salary is required !' })
    }),
});
