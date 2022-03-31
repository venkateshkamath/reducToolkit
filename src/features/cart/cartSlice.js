import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
  amount: 14,
  total: 0,
  isLoading: true,
  cartItems: [],
};

// fetching data
const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // do not return
      state.cartItems = [];
    },
    //removingItems
    removeItems: (state, action) => {
      const itemId = action.payload;
      console.log(action);
      const cartItemNew = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
      state.cartItems = cartItemNew;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => {
        return payload.id === item.id;
      });
      if (cartItem.amount === 0) {
        cartItem.amount = 0;
      } else {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => action.payload == item.id
      );
      cartItem.amount = cartItem.amount + 1;
    },
    calculateTotals: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((item) => {
        amount = amount + item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  // extra reducers

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// new Object
export const { clearCart, removeItems, decrease, increase, calculateTotals } =
  cartSlice.actions;
export { getCartItems };
export default cartSlice.reducer;
