import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface product{
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    rating:{
        rate: number;
        count: number;
    };
    
}
 interface cartProducts extends product{
    quantity: number;
}

export interface cartState{
    cartProduct: cartProducts[];
}

const initialState: cartState ={
    cartProduct: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<product>){
            const existingProduct = state.cartProduct.find(
                productInCart => productInCart.id === action.payload.id);
            if(existingProduct)
                existingProduct.quantity += 1;
            else
                state.cartProduct.push({...action.payload, quantity: 1});
        } ,
        incrementQuantity(state,action: PayloadAction<number>){
            const incrementedProduct = state.cartProduct.find(
                productInCart => productInCart.id === action.payload);
            if(incrementedProduct){
                incrementedProduct.quantity += 1;
            }
        },
        decrementQuantity(state,action: PayloadAction<number>){
            const decrementedProduct = state.cartProduct.find(
                productInCart => productInCart.id === action.payload);
                
                if(!decrementedProduct) return;
            if(decrementedProduct.quantity > 1){
                decrementedProduct.quantity -= 1;
            }else
               { state.cartProduct = state.cartProduct.filter((productInCart) => productInCart.id !== action.payload);}
        },
        removeFromCart(state,action: PayloadAction<number>){
                state.cartProduct = state.cartProduct.filter(productInCart => productInCart.id !== action.payload);
        },
        clearCart(){
           return { cartProduct: [], };
        }

    },
});
export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;