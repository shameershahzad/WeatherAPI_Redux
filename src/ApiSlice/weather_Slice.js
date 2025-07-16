import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("fetchData", async (data) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=84d6e25f79a148a18d292807252901&q=${data}&aqi=yes`)
    return response.json();
})

const weatherSlice = createSlice({
    name:"weather",
    initialState:{
     isLoading:false,
    data:null,
    isError:false
    },extraReducers:(builder) => {
        builder.addCase(fetchData.pending,(state,action) => {
            state.isLoading = true
        });
        builder.addCase(fetchData.fulfilled,(state,action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchData.rejected,(state,action) => {
            state.isError = true;
            console.log("Error:",action.payload);
        })
    }
})

export {fetchData}
export default weatherSlice.reducer;