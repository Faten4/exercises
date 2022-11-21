import { z, TypeOf } from 'zod';

export const studentSchema = z.object({
  body: z.object({
    id: z
        .string({ required_error: 'ID is required !' })
        .min(3,'You id must be more than 3'),
    name: z
      .string({ required_error: 'name is required !' })
      .min(3, 'You name must be more than 3 char'),
      major: z.enum(['IT', 'IS','CS','SWE'], 
        { required_error: 'type is required and must be one of this (IT, IS,CS,SWE)!' }),
        Level: z.number({ required_error: 'number is required !' })
             .min(1, 'you must be between 1-8').max(8, 'you must be between 1-8 '),
             GPA: z.number({ required_error: 'GPA is required !' })
             .min(0, 'you must be between 0-5').max(5, 'you must be between 0-5 ')
      
  }),
});

export type StudentSchemaType = TypeOf<typeof studentSchema>['body'];