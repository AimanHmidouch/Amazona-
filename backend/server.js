import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';


dotenv.config(); 
const app= express();

mongoose.connect(process.env.ATLAS_MONGO, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);



app.get('/', (req,res) =>{
    res.send('Server is ready');
});

app.use((err,req, res, next) =>{
    res.status(500).send({message: err.message});
})

const port= process.env.port || 5000;
app.listen(port, () =>{
    console.log(`server at http://localhost:${port}`);
})