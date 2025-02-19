import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse={id:number,title:string,prefix:string,img:string}[]
const actGetCategories=createAsyncThunk(
    'categories/actGetCategories',
    async(_,thunkApi)=>{
        const {rejectWithValue}=thunkApi
        try {
            const response=await axios.get<TResponse>('http://localhost:3000/categories')
            return response.data
        } catch (error) {
            if(axios.isAxiosError(error)){ //يعني ايرور بتفهمه الاكسيوس وعارفه نوعه
                return rejectWithValue(error.response?.data.message || error.message)
            }else{
                return rejectWithValue('An unexpected error')
            }
        }
    }
)

export default actGetCategories