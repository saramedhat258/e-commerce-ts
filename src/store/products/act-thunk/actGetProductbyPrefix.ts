import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { TProRecord } from "@customTypes/product";

type tresponse=TProRecord[]
const actGetProductbyPrefix=createAsyncThunk(
    "products/actGetProductbyPrefix",
    async(prefix:string,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI
        try {
            const response=await axios.get<tresponse>(`http://localhost:3000/products?cat_prefix=${prefix}`)
            return response.data
        } catch (error) {
            if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data.message||error.message)
            }else{
                return rejectWithValue("An un expected error")
            }
        }
    }
)
export default actGetProductbyPrefix