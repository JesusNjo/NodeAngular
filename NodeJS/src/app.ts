import express from 'express'
import dotenv from 'dotenv'
import routerClient from './routes/client.route';
import routerProduct from './routes/product.router';
dotenv.config();


const app = express();

app.use(express.json());

//Create

app.use('/client',routerClient)
app.use('/product',routerProduct)

export default app;