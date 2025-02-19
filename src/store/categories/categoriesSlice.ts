import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act-thunk/actGetCategories";
import { Tloader,Trecord } from "@customTypes/category";
interface ICatgeoriesState{
    records:Trecord[]
    loading:Tloader
    error:string|null
}
const initialState:ICatgeoriesState={
    records:[],
    loading:'idle',
    error:null
}
const categoriesSlice=createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(actGetCategories.pending,(state)=>{
            state.loading="pending"
            state.error=null
        })
        builder.addCase(actGetCategories.fulfilled ,(state,action)=>{
            state.loading="succeeded"
            state.records=action.payload
        })
        builder.addCase(actGetCategories.rejected ,(state,action)=>{
            state.loading="failed"
            if(action.payload&& typeof action.payload==='string'){
                state.error=action.payload
            }
        })
    }
})

export {actGetCategories}   //بحيث السلايس بتاعتي يبقى فيها كل حاجه اقدر استدعيها منها 
export default categoriesSlice.reducer