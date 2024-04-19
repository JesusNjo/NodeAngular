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
export const getClientById = async(req:Request,res:Response):Promise<void>=>{
    const{id}= req.params;

    try {
        const clientFound = await prisma.findUnique({where: {id:Number(id)}});
        if(!clientFound){
            res.status(404).json({message: 'Client not found'});
            return;
        }
        res.status(200).json(clientFound);
    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
    }


}
export const modifyClient = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, lastName, email } = req.body;

    const existingClientWithEmail = await prisma.findFirst({
        where: {
            email: email,
            NOT: {
                id: Number(id)
            }
        }
    });

    // if (existingClientWithEmail) {
    //     res.status(400).json({ message: 'Email is already in use by another client' });
    //     return;
    // }

    let nameExist = name !== undefined ? name : req.body.name;
    let lastNameExist = lastName !== undefined ? lastName : req.body.lastName;

    try {
        let clientNew = await prisma.update({
            where: { id: Number(id) },
            data: {
                name: nameExist,
                lastName: lastNameExist,
            }
        });
        res.status(200).json(clientNew);
    } catch (error) {
        console.error('Error modifying client:', error);
        res.status(500).json({ message: 'An error occurred while modifying the client' });
    }
};
