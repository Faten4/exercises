import express from 'express';
import validate from '../middleware/validate';

import {
  bankSchema,
    BankSchemaType,
} from '../zod_schema/bank.schema';

const router = express.Router();

let bank :  BankSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(bank);
});

router.post('/', validate(bankSchema), (req, res, next) => {
  const newpark = req.body as  BankSchemaType;

  bank.push(newpark);
  return res.status(201).json({ message: ' Added !' });
});

router.put('/:id',validate(bankSchema), (req, res) => {
    const updatebank = req.body as  BankSchemaType;
    const { id } = req.params;
  
    const updatedm = bank.filter((i) => {
      return i.id !== id;
    });
  
    updatedm .push(updatebank);
  
    bank = updatedm;
  
    return res.json({
      message: ' Updated !',
    });
  });



router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delete1 = bank.filter((i) => {
      return i.id !== id ;
    });
  
    bank = delete1;
    return res.json({
      message: 'deleted !',
    });
});


export default router;