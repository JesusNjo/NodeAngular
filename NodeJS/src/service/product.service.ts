import { NextFunction, Request, Response } from "express";
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

//middleware
export const productMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID not found' });
    }

    try {
        const product = await prisma.findUnique({ where: { id: Number(id) } });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        (res as any).product = product;

        
        next();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getProductById = async (req:Request,res:Response):Promise<void>=>{
    const{id} = req.params;
    let product;
    if(!id){
        res.status(404).json({message:'Product Not found'})
    }
    try {
        
        product =await prisma.findUnique({where: {id:Number(id)}})
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
        
    }
}


export const modifyProductById = async (req: Request, res: Response): Promise<void> => {
    const { name, price, description } = req.body;
    const{id}= req.params;
    
    try {
        const existingProduct = await prisma.findUnique({ where: { id: Number(id) } });
        
        if (!existingProduct) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        let updatedName = name !== undefined ? name : existingProduct.name;
        let updatedPrice = price !== undefined ? price : existingProduct.price;
        let updatedDescription = description !== undefined ? description : existingProduct.description;

        let updatedProduct = await prisma.update({
            where: { id: Number(id) },
            data: {
                name: updatedName,
                price: updatedPrice,
                description: updatedDescription
            }
        });

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error modifying product:', error);
        res.status(500).json({ message: 'An error occurred while modifying the product' });
    }
};


export const productOrder = async (req: Request, res: Response): Promise<void> => {
    const { sortBy } = req.params;

    if (!sortBy) {
        res.status(400).json({ message: 'SortBy parameter is missing' });
        return;
    }

    const validFields = ['id', 'name', 'price'];

    if (!validFields.includes(sortBy)) {
        res.status(400).json({ message: 'Invalid sortBy field' });
        return;
    }

    try {
        const products = await prisma.findMany({
            orderBy: {
                [sortBy]: 'asc'
            }
        });

        res.status(200).json(products);
    } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(500).json({ message: 'An error occurred while retrieving products' });
    }
};

