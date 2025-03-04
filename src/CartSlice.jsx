import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const product = state.items.find(item => 
            item.name === action.payload.name ?
                product.quantity++ :
                state.items.push({...action.payload, quantity: 1})
        )
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name)
    },
    updateQuantity: (state, action) => {
        const {product, qty} = action.payload

        state.items.find(prod =>
            prod.name === product.name && { ...product, quantity: qty }
        )
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
