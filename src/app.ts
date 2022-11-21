"//@ts-expect-error"

import express from 'express';
import movieRouter from './routes/movie.routes'
import studentRouter from './routes/student.routes'
import bankRouter from './routes/bank.routes'
import { z } from 'zod';
const app = express();

app.use(express.json());

app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/bank', bankRouter);




const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)
});