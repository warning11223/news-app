import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store";
import {ICartItem} from "../@types/types";



interface CartState {
    items: ICartItem[]
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{product: ICartItem, count: number}>) => {
            const foundProduct = state.items.find(item => item._id === action.payload.product._id);

            if(foundProduct) {
                foundProduct.count++;
            } else {
                state.items = [...state.items, action.payload.product];

            }

            return state;
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item._id !== action.payload)
        },
    },
})

export const { addItem, deleteItem } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.items

export default cartSlice.reducer