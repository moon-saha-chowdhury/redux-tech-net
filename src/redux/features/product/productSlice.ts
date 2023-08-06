import { IProduct } from './../../../types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProducts {
  status: boolean;
  priceRange: number;
}
const initialState: IProducts = {
  status: false,
  priceRange: 100,
};

const productSlice = createSlice({
  name: 'Product Slice',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleState, setPriceRange } = productSlice.actions;
export default productSlice.reducer;
