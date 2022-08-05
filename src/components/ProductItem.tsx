import React, {useState} from 'react';
import {ICartItem} from "../@types/types";
import {useAppDispatch} from "../redux/hooks";
import {addItem} from "../redux/cartSlice";

const ProductItem: React.FC<ICartItem> = (product) => {
    const dispatch = useAppDispatch();

    const [count, setCount] = useState(0);

    const addToCart = (product: ICartItem) => {
        dispatch(addItem({product, count}))
    }

    return (
        <div className=' shadow-md rounded-md w-2/4 mb-5 p-10 mx-auto bg-white mt-10 flex flex-col justify-center items-center '>
            <img src={product.imagePath} alt={product.name} width={300} height={300}/>
            <div className=' text-lg font-bold my-2 '>{product.name}</div>
            <div className=' text-sm text-green-600 '>₴ {product.price}</div>
            {/*<Quantity count={count} setCount={setCount}/>*/}
            <button
                className=' bg-blue-300 text-white rounded-md p-2 mt-3'
                onClick={() => addToCart(product)}
            >
                Добавить в корзину</button>
        </div>
    );
};

export default ProductItem;
