import { z, TypeOf } from 'zod';

export const bankSchema = z.object({
  body: z.object({
    id: z
        .string({ required_error: 'ID is required !' })
        .min(3,'You id must be more than 3'),
    Username: z
      .string({ required_error: 'name is required !' })
      .min(6, 'You name must be more than 6 char'),
    Password: z
           .string({ required_error: 'password is required !' }),
     
    Balance: z
           .number({ required_error: 'number is required !' })
             

  }),
});

export type BankSchemaType = TypeOf<typeof bankSchema>['body'];