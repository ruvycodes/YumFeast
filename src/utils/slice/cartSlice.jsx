import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "Cart",
    initialState: {
        items: [],
        showNotification: false,
    },

    reducers: {
        addItem: (state, action) => {
            let newItem = action.payload
            let matchedItem = state.items.find(item => item.card.info.id === newItem.card.info.id)

            if (matchedItem) {
                matchedItem.count++
            }

            else {
                state.items.push({ ...newItem, count: 1 }) // this will add the count property among the info , id , name etc. Simple unpack the object with ... operator then push all the properties 
            }
        },

        removeItem: (state, action) => {
            let id = action.payload;

            //iterate over the array and match the id then perform the action
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].card.info.id === id) {
                    state.items.splice(i, 1)
                    break;
                }
            }
        },

        clearCart: (state, action) => {
            state.items.length = 0;
        },

        decreaseCount: (state, action) => {
            let id = action.payload

            //iterate over the array and match the id then perform the action
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].card.info.id === id) {
                    state.items[i].count--;
                    break;
                }
            }
        },

        increaseCount: (state, action) => {
            let id = action.payload

            //iterate over the array and match the id then perform the action
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].card.info.id === id) {
                    state.items[i].count++;
                    break;
                }
            }
        },

        displayNotification: (state, action) => {
            state.showNotification = action.payload
            console.log(state.showNotification);
        }
    }
})

export const { addItem, removeItem, clearCart, increaseCount, decreaseCount, displayNotification } = cartSlice.actions
export default cartSlice.reducer;