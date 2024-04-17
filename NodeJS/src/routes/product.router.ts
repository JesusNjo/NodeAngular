import express from 'express';
import { createProduct, getAllProduct, getProductById } from '../service/product.service';


const router = express();

router.post('/register',createProduct);
router.get('/',getAllProduct);
router.get('/:id',getProductById);

export default router;