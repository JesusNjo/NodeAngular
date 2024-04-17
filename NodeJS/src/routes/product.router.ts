import express from 'express';
import { createProduct, getAllProduct } from '../service/product.service';


const router = express();

router.post('/register',createProduct);
router.get('/',getAllProduct);

export default router;