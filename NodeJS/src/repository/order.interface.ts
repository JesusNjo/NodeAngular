import { Client } from "./client.interface";
import { Product } from "./product.interface";

export interface Order{
    id:number,
    client: Client,
    product: Product,
    quantity:number
    totalAmount:number
}