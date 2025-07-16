import {configureStore} from "@reduxjs/toolkit"
import apiReducer from "../ApiSlice/weather_Slice"

export const store = configureStore({
    reducer:{
     weatherApi:apiReducer
    }
});

export default store;