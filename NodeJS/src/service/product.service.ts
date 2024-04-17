import { Request, Response } from "express";
import prisma from '../models/product'


export const createProduct = async(req:Request,res:Response):Promise<void>=>{
    const {name,description,price} = req.body;
    if(!name||!description||!price){
        res.status(400).json({message: "All field are required"});
    }

    try {
        
        const product = await prisma.create({
            data:{
                name,
                description,
                price
            }
        })

        res.status(201).json(product);


    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
    }
}

export const getAllProduct = async(req:Request,res:Response):Promise<void>=>{

    try {
        const products = await prisma.findMany();
        if(products.length == 0){
        res.status(204).json({message:'Not content'});
    }
    res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
    }
}