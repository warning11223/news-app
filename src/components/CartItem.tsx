import React from 'react';
import {ICartItemProps} from "../@types/types";
import {useAppDispatch} from "../redux/hooks";
import {deleteItem} from "../redux/cartSlice";



const CartItem: React.FC<ICartItemProps> = ({ imagePath, count, _id, name, price, total}) => {
    const dispatch = useAppDispatch();

    const onDeleteHandler = (id: string) => {
        dispatch(deleteItem(id))
    }


    return (
            <div className='flex mb-4 '>
                <img className='mr-3 p-3 ' src={imagePath} alt={name} width={250} height={250} />
                <div className=' mt-2 '>
                    <div>{name}</div>
                    <div>{count} x ₴ {price}</div>

                    <button
                        onClick={() => onDeleteHandler(_id)}
                        className=' text-red-600 bg-transparent border-0 mt-3 '
                    >Удалить</button>
                </div>
            </div>
    );
};

export default CartItem;
