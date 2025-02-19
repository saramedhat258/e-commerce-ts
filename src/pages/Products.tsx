import Product from "@components/e-commerce/Product"
import { useEffect } from "react"
import { useAppDispatch,useAppSelector } from "@store/hooks"
import { actGetProductbyPrefix,cleanup } from "@store/products/productSlice"
import { useParams } from "react-router-dom"
function Products() {
    const dispatch=useAppDispatch()
    const {records}=useAppSelector(state=>state.product)
    const param=useParams()

    useEffect(()=>{
        dispatch(actGetProductbyPrefix(param.prefix as string))
        return ()=>{
            dispatch(cleanup())
        }
    },[dispatch,param])
    return (
        <>
                <div className="grid grid-cols-4 justify-between mt-10">
                    {
                        records.length>0?
                        records.map(r=>(
                            <Product {...r}/>
                        )):
                        'no products'
                    }
                </div>
        </>
    )
}

export default Products