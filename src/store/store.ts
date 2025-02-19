import { configureStore } from "@reduxjs/toolkit";
import categories from './categories/categoriesSlice'
import product from './products/productSlice'

export const store =configureStore({
    reducer:{categories,product}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store