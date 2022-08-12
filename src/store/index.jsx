import { configureStore } from '@reduxjs/toolkit'
import carSlice from './slices/car.slice'
import isLoadingSlice from './slices/isLoading.Slice'
import  ProductsSlice  from './slices/products.slice'
import  purchasesSlice  from './slices/purchases.slice'

export default configureStore({
    reducer: {
        isLoading:isLoadingSlice,
        products:ProductsSlice,
        purchases:purchasesSlice,
        car:carSlice

    }
})
