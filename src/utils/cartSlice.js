import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter( item => item.id!==action.payload.id)
            // Now If we want to console.log(state) - > Gives proxy object -> So we Do - > console.log(current(state))
        },
        clearItem: (state, action) => {

            // If we make state=[] this actually modifies the local variable hence we need to modify globel we do the below stuff
            state.items.length = 0 // Or we can do return [] - RTK says either mutate state or return new state
        }

    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;
