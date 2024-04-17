import { Request, Response } from 'express';
import prisma from '../models/client';



export const createClient = async(req:Request,res:Response):Promise<void>=>{
    const{name,lastName,email} = req.body;

    if(!name||!lastName||!email){
        res.status(400).json({message: 'All field are required'});
    }
    try {
        const client = await prisma.create({
            data:{
                name,lastName,email
            }
        });
        
        res.status(201).json(client);
        console.log(client);
        
    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
        
    }
}

export const getAllClient= async(req:Request,res:Response):Promise<void> =>{
    try {
        const clients = await prisma.findMany();
        if(clients.length ==0){
            res.status(204).json({message:'Not content'});
        }
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
    }
}