import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
import { setIsLoading } from './isLoading.Slice';

export const carSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
        setCar: (state,action)=>{
           const car = action.payload
            return car
        }
    }
})

export const { setCar } = carSlice.actions;
export const getCarthunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart",getConfig())
        .then((res) => dispatch(setCar(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const buyCarthunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases',{},getConfig())
        .then(() => dispatch(setCar([])))
        .finally(() => dispatch(setIsLoading(false)));
}

export default carSlice.reducer;
