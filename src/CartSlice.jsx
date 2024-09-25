import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
            console.log(state.items)
        },
        removeItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items = state.items.filter(item => item.name !== name);
            // const existingItem = state.items = state.items.filter(item => item.name !== name);
            // const addedToCart = state.items = state.items.filter(item => item.name !== name);
            // const addedToCart = existingItem
            console.log(state.addedToCart)
            console.log(JSON.stringify(state.items.filter(item => item.name !== name)));
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            console.log(name)
            console.log(action.payload)
            const itemToUpdate = state.items.find(item => item.name === name);
            console.log(itemToUpdate.quantity)
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }

        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
