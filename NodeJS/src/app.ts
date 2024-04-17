import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import routerClient from './routes/client.route';
import routerProduct from './routes/product.router';
dotenv.config();


const app = express();

app.use(express.json());

//Create

app.use(cors());

app.use('/client',routerClient)
app.use('/product',routerProduct)

export default app;