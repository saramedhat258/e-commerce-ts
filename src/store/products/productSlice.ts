
import actGetProductbyPrefix from "./act-thunk/actGetProductbyPrefix";
import { TProRecord,TPloader } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";


interface proType{
    records:TProRecord[],
    loader:TPloader,
    error:string|null
}
const initialState:proType={
    records:[],
    loader:'idle',
    error:null
}

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        cleanup:(state)=>{
            state.records=[]
        }
    },
    extraReducers:((builder)=>{
        builder.addCase(actGetProductbyPrefix.pending,(state)=>{
            state.loader="pending"
            state.error=null
        })
        builder.addCase(actGetProductbyPrefix.fulfilled,(state,action)=>{
            state.loader="succeeded"
            state.records=action.payload
        })
        builder.addCase(actGetProductbyPrefix.rejected,(state,action)=>{
            state.loader="failed"
            if(action.payload&& typeof action.payload==='string'){
                state.error=action.payload
            }
        })
    })
}
)

export const {cleanup}= productSlice.actions
export {actGetProductbyPrefix}
export default productSlice.reducer