import express from 'express';
import validate from '../middleware/validate';

import {
  studentSchema,
  StudentSchemaType,
} from '../zod_schema/student.schema';

const router = express.Router();

let student :  StudentSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(student);
});

router.post('/', validate( studentSchema), (req, res, next) => {
  const newstudent = req.body as  StudentSchemaType;

  student.push(newstudent);
  return res.status(201).json({ message: ' Added !' });
});

router.put('/:id',validate( studentSchema), (req, res) => {
    const updatedstudent = req.body as  StudentSchemaType;
    const { id } = req.params;
  
    const updatesu = student.filter((i) => {
      return i.id !== id;
    });
  
    updatesu .push(updatedstudent);
  
    student = updatesu;
  
    return res.json({
      message: ' Updated !',
    });
  });



router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delete1 = student.filter((i) => {
      return i.id !== id ;
    });
  
    student = delete1;
    return res.json({
      message: 'deleted !',
    });
});

router.get('/search/:id', (req, res)=>{
    const {id} = req.params;
  
   // let name = str.replace("-"," ");
    const searcharr = student.filter((ser)=>{
    // return ser.name.toLowerCase().includes();
     if (ser.major === id){
      return ser
     }
    })
  return res.json(searcharr)
})
export default router;