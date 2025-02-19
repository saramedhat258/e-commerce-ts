
import { useEffect } from "react"
import { useAppDispatch,useAppSelector } from "@store/hooks"
import { actGetCategories } from "@store/categories/categoriesSlice"

import Category from "@components/e-commerce/Category"
function Categories() {
    const dispatch=useAppDispatch()
    const {records}=useAppSelector(state=>state.categories)
    useEffect(()=>{
        if(!records.length){
            dispatch(actGetCategories())
        }
    },[dispatch,records.length])

    return (
        <div>
            <div className="grid grid-cols-4 justify-between mt-10">
                    
                    {
                        records.length>0?
                        records.map(rec=>(
                            <Category {...rec} />
                        ))
                        :<p>there are no catirories</p>
                    }
                
                    
            </div>
        </div>
    )
}

export default Categories