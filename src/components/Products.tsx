import React from 'react';
import {ICartItem} from "../@types/types";
import ProductItem from "./ProductItem";

const products: ICartItem[] = [
    {
        _id: '233fdsa',
        imagePath: 'https://hotline.ua/img/tx/325/3255051455.jpg',
        price: 6195,
        name: 'Смартфон Samsung Galaxy A13 3/32GB Blue',
        count: 1,
    },
    {
        _id: '1231sdf',
        imagePath: 'https://hotline.ua/img/tx/331/3314237545.jpg',
        name: 'Смартфон Samsung Galaxy A12 SM-A127F 3/32GB Blue',
        price: 5999,
        count: 1,
    },
    {
        _id: '2fsdfasa',
        imagePath: 'https://hotline.ua/img/tx/227/2270292045.jpg',
        price: 6298,
        name: 'Смартфон Samsung Galaxy M115 M11 3/32 Black',
        count: 1,
    },
    {
        _id: '2safd',
        imagePath: 'https://hotline.ua/img/tx/323/3236649965.jpg',
        price: 5399,
        name: 'Смартфон Samsung Galaxy A12 SM-A125F 3/32GB Red',
        count: 1,
    },

]

const Products: React.FC = () => {


    return (
        <>
            {
                products.map(item => {
                    return <ProductItem key={item._id} {...item}/>
                })
            }
        </>
    );
};

export default Products;
