import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const product = state.items.find(item => item.name === action.payload.name)

        if (product) {
            product.quantity++
        } else {
            state.items.push({...action.payload, quantity: 1})
        }
    },
    removeItem: (state, action) => {
        console.log(action.payload)
        state.items = state.items.filter(item => item.name !== action.payload.name)
    },
    updateQuantity: (state, action) => {
        const product = state.items.find(item => item.name === action.payload.name)

        if (product) {
            product.quantity = action.payload.quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
