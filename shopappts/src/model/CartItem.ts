import { Product } from "./Product";

export default interface CartItem extends Product {
    qty: number,
    amount: number
}