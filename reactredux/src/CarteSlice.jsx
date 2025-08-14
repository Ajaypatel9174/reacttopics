import { createSlice } from "@reduxjs/toolkit";

  let CartSlice =  createSlice({
    name:"cart",
    initialState :{
        Cartitems : []
    },
    reducers :{
        additem : (state,action)=>{
            state.Cartitems.push(action.payload)
        }
    }


})
export const {additem} = CartSlice.actions
export default CartSlice.reducer