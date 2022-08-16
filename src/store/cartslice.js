import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },

    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // console.log(newItem)
            //if item already have
            const existingItem = state.itemsList.find(
                (item) => item.id === newItem.id
            );
            // console.log(existingItem)


            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
                state.totalQuantity++;
            }
        },

        removeFromCart(state, action) {
            const id = action.payload;
            console.log(id);
            const existingItem = state.itemsList.find(item => item.id === id);
            console.log(existingItem)
            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id)
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
    }
})

// sendCartData = (cart) => {
//     return (dispatch) => {
      
//     }
// }

export const cartActions = cartSlice.actions;

export default cartSlice; 