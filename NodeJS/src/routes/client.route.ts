import express from 'express';
import { createClient, getAllClient,modifyClient,getClientById } from '../service/client.service';


const router = express.Router();
//create client
router.post('/register',createClient);
// get all client
router.get('/',getAllClient);
// find client by id
router.get('/:id', getClientById)
//modify client
router.put('/:id',modifyClient);


export default router;