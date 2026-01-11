import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchState{
    searchText: string;
    category: string;
}

const initialState: searchState = {
    searchText: "",
    category: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchByText(state, action: PayloadAction<string>){
            state.searchText = action.payload;
        },
        searchByCategory(state, action: PayloadAction<string>){
            state.category = action.payload;
        },
        clearCategory(state){
            state.category = "";
        },
        clearsearch(state){
            state.searchText = "";
        },
    },
});

export const {searchByText, searchByCategory, clearCategory,clearsearch} = searchSlice.actions;

export default searchSlice.reducer;