import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface product{
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    category: string;
    rating:{
        rate: number;
        count: number;
    };
}

export interface ProductState{
    loading: boolean;
    error?: any;
    status: "idle" | "success" | "failed" | "loading";
    products: product[];
}

const initialState: ProductState ={
    loading: false,
    status: "idle",
    products: [],
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        return response.json();
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.status = "loading";
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) =>{
            state.loading = false;
            state.status = "success";
            state.products = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
            state.status = "failed";
            state.error = "failed to fetch Products from the API"
        });
    },
});

export default productSlice.reducer;