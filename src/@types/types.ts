export interface ICartItem {
    name: string;
    imagePath: string;
    price: number;
    count: number;
    _id: string;
}

export interface ICartItemProps extends ICartItem{
    total: number;
}

export interface IProduct {
    products: ICartItem[];
}















