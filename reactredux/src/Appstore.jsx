import { configureStore } from "@reduxjs/toolkit";

import CartSlicereducer from './CarteSlice'


let Appstore = configureStore({
    reducer :{
        cart : CartSlicereducer
    }




})

export default Appstore