import dotnev from 'dotenv';
dotnev.config()
import express from 'express';

import userRouter from './routes/user.routes.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res)=> {
    res.send('Hello World');
})


app.use('/api', userRouter);


app.listen(process.env.PORT,()=> {
    console.log(`Server is running on port:${process.env.PORT}`);
})
