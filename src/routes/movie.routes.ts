import express from 'express';
import validate from '../middleware/validate';

import {
  movieSchema,
    MovieSchemaType,
} from '../zod_schema/movie.schema';

const router = express.Router();

let movie : MovieSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(movie);
});

router.post('/', validate(movieSchema), (req, res, next) => {
  const newpark = req.body as MovieSchemaType;

  movie.push(newpark);
  return res.status(201).json({ message: ' Added !' });
});

router.put('/:id',validate(movieSchema), (req, res) => {
    const updatemovie = req.body as MovieSchemaType;
    const { id } = req.params;
  
    const updatedmovie = movie.filter((i) => {
      return i.id !== id;
    });
  
    updatedmovie .push(updatemovie);
  
    movie = updatedmovie;
  
    return res.json({
      message: ' Updated !',
    });
  });



router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const delete1 = movie.filter((i) => {
      return i.id !== id ;
    });

    
    movie = delete1;
    return res.json({
      message: 'deleted !',
    });
});

router.get('/search/:id', (req, res)=>{
  const {id} = req.params;

 // let name = str.replace("-"," ");
  const searcharr = movie.filter((ser)=>{
  // return ser.name.toLowerCase().includes();
   if (ser.name === id|| ser.genre === id ){
    return ser
   }
  })
return res.json(searcharr)
}
);




export default router;