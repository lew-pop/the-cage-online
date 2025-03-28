import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    shippingAddress: {
      firstName: "",
      lastName: "",
      state: "",
      streetAddress: "",
      apartment: "",
      city: "",
      postcode: "",
      phone: "",
      email: "",
      orderNotes: "",
    },
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      if (!product.variation) {
        const cartItem = state.cartItems.find(item => item.id === product.id);
        if (!cartItem) {
          state.cartItems.push({
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuidv4(),
          });
        } else {
          state.cartItems = state.cartItems.map(item => {
            if (item.cartItemId === cartItem.cartItemId) {
              return {
                ...item,
                quantity: product.quantity
                  ? item.quantity + product.quantity
                  : item.quantity + 1,
              };
            }
            return item;
          });
        }
      } else {
        const cartItem = state.cartItems.find(
          (item) =>
            item.id === product.id &&
            product.selectedProductColor &&
            product.selectedProductColor === item.selectedProductColor &&
            product.selectedProductSize &&
            product.selectedProductSize === item.selectedProductSize &&
            (product.cartItemId ? product.cartItemId === item.cartItemId : true)
        );
        if (!cartItem) {
          state.cartItems.push({
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuidv4(),
          });
        } else if (cartItem !== undefined && (cartItem.selectedProductColor !== product.selectedProductColor || cartItem.selectedProductSize !== product.selectedProductSize)) {
            state.cartItems = [
                ...state.cartItems,
                {
                  ...product,
                  quantity: product.quantity ? product.quantity : 1,
                  cartItemId: uuidv4(),
                },
            ];
        } else {
          state.cartItems = state.cartItems.map((item) => {
            if (item.cartItemId === cartItem.cartItemId) {
                return {
                    ...item,
                    quantity: product.quantity
                      ? item.quantity + product.quantity
                      : item.quantity + 1,
                    selectedProductColor: product.selectedProductColor,
                    selectedProductSize: product.selectedProductSize,
                };
            }
            return item;
          });
        }
      }

      
      toast.success("Added to cart");
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload
      );
      toast.error("Removed From Cart");
      
    },
    decreaseQuantity(state, action) {
      const product = action.payload;
      if (product.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.cartItemId !== product.cartItemId
        );
        toast.error("Removed From Cart");
        
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.cartItemId === product.cartItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        toast.warn("Item Decremented From Cart");

        
      }
    },
    deleteAllFromCart(state) {
      state.cartItems = [];
    },
    saveShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  deleteAllFromCart,
  saveShippingAddress,
} = cartSlice.actions;
export default cartSlice.reducer;
