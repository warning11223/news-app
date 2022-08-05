import React, {useState} from 'react';
import logo from '../assets/images/airflow-icon.svg';
import cart from '../assets/images/cart.svg'
import cn from 'classnames'
import CartItem from "./CartItem";
import {useAppSelector} from "../redux/hooks";
import {selectCart} from "../redux/cartSlice";


/*const cartItems: ICartItem[] = [
    {
        _id: '1231sdf',
        imagePath: 'https://hotline.ua/img/tx/331/3314237545.jpg',
        name: 'Смартфон Samsung Galaxy A12 SM-A127F 3/32GB Blue',
        price: 5999,
        count: 1,
    },

]*/

const Header: React.FC = () => {
    const cartItems = useAppSelector(selectCart);
    const [isShowCart, setIsShowCart] = useState(false);

    const total = cartItems.reduce((acc, item) => {
        return acc += item.price * item.count;
    }, 0)

    const count = cartItems.reduce((acc, item) => {
        return acc += item.count;
    }, 0)


    return (
        <div className='flex items-center justify-between relative py-1 px-3 sticky top-0 ' style={{
            backgroundImage: 'linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
        }}>
            <img src={logo} alt="logo" width={100} height={100}/>

            <button
                className='bg-transparent border-none relative '
                onClick={() => setIsShowCart(!isShowCart)}
            >
                <img src={cart} alt="cart" width={70} height={70}/>

                {
                    count > 0 &&
                    <div className=' text-white absolute top-2 right-3.5 font-bold rounded-full bg-red-700 w-7 h-7 flex justify-center items-center '>
                        {count}
                    </div>
                }
            </button>

            <div className={cn('absolute top-3 right-0 ', {
                hidden: !isShowCart,
            })} style={{top: '108px'}}>
                {
                    cartItems.length > 0 ?
                        <div
                            className=' items-center p-5 rounded-md  divide-y bg-white overflow-y-scroll  '
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', height: '550px'}}
                        >
                            {
                                cartItems.map(item => {
                                    return (
                                        <CartItem
                                            key={item._id}
                                            name={item.name}
                                            imagePath={item.imagePath}
                                            price={item.price}
                                            count={item.count}
                                            _id={item._id}
                                            total={total}
                                        />
                                    )
                                })
                            }
                            <div className=' flex justify-between pt-5 items-center '>
                                <div className='text-lg'>
                                    Total: <b>₴ {total} </b>
                                </div>
                                <button className=' text-red-600 bg-transparent border-0 '>Заказать</button>
                            </div>
                        </div> :
                        <div
                            className=' items-center p-5 rounded-md  divide-y bg-white '
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}
                        >
                            <h2>Корзина пустая 😞</h2>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;
