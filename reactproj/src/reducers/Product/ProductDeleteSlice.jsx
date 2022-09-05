import { createSlice } from "@reduxjs/toolkit";

export const ProductDeleteSlice = createSlice({
  name: "productDelete",
  initialState: {loading: false, error:false, products:[]},
  reducers: {
    PRODUCT_DELETE_REQUEST: (state, action) => {
      return {loading: true, products:[]}
    },

    PRODUCT_DELETE_SUCCESS: (state, action) => {
      console.log('payload:',action.payload, ' state:', state)
      return {loading: false, products:action.payload}
    },

    PRODUCT_DELETE_FAIL: (state, action) => {
      console.log(action.payload)
      return {loading: false, error:action.payload}
    },

  },
});


export const { PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL } = ProductDeleteSlice.actions;

//enable us to import the slice as ProductReducer
export default ProductDeleteSlice.reducer;

