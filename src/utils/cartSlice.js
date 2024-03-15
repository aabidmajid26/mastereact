import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload) //mutating the store here.
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items = []   //apparently this is not gonna work.
            state.items.length = 0; // this will work.
        }
    }
});

export const {addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer