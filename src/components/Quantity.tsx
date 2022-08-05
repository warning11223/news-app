import React, {useState} from 'react';

type QuantityProps = {
    count: number;
    setCount: (value: number) => void;
}

const Quantity: React.FC<QuantityProps>  = ({count, setCount}) => {



    return (
        <div className=' flex items-center '>
            <button
                className='  '
                onClick={() => count > 0 && setCount(count - 1)}
            >-</button>
            <input
                type="number"
                className=' mx-2 '
                value={count}
                onChange={e => count < 20 && setCount(+e.target.value)}
            />
            <button
                className='  '
                onClick={() => count < 20 && setCount(count + 1)}
            >+</button>
        </div>
    );
};

export default Quantity;
