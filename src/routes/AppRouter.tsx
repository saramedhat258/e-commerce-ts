import { createBrowserRouter,RouterProvider } from "react-router-dom"
//layout
import MainLayout from "@layouts/MainLayout/MainLayout"
//pages
import Aboutus from "@pages/Aboutus"
import Categories from "@pages/Categories"
import Error from "@pages/Error"
import Home from "@pages/Home"
import Login from "@pages/Login"
import Register from "@pages/Register"
import Products from "@pages/Products"

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'categories',
                element:<Categories/>
            },
            {
                path:'products/:prefix',
                element:<Products/>,
                loader:({params})=>{
                    if(
                        typeof params.prefix!=="string" ||
                        !/^[a-z]+$/i.test(params.prefix)
                    ){
                        throw new Response('Bad Request',{
                            statusText:'Category not found',
                            status:400
                        })
                    }
                    return true
                }
            },
            {
                path:'about-us',
                element:<Aboutus/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
        ]
    }
])

function AppRouter() {
    return <RouterProvider router={router}/>
}

export default AppRouter