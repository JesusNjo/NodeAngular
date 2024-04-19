import express from 'express';
import { createProduct, getAllProduct, getProductById,modifyProductById,productOrder } from '../service/product.service';


const router = express();
//create
router.post('/register',createProduct);
//get all product
router.get('/',getAllProduct);
//find product by id
router.get('/:id',getProductById);
//modify product
router.put('/:id',modifyProductById)
// get product by sort
router.get('order/id', productOrder);

export default router;