import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const fetchData = createAsyncThunk("fetchData", async (data) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${data}&aqi=yes`)
    return response.json();
})

const weatherSlice = createSlice({
    name:"weather",
    initialState:{
     isLoading:false,
    data:null,
    isError:false
    },extraReducers:(builder) => {
        builder.addCase(fetchData.pending,(state) => {
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