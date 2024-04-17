import express from 'express';
import { createClient, getAllClient } from '../service/client.service';


const router = express.Router();

router.post('/register',createClient);
router.get('/',getAllClient);


export default router;