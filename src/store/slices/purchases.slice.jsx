import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../util/getConfig';
import { setIsLoading } from './isLoading.Slice';

export const purchasesSlice = createSlice({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            const purchases = action.payload;
            return purchases
        }
    }
})


export const getPurchasesthunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`,getConfig())
        .then((res) => dispatch(setPurchases(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
