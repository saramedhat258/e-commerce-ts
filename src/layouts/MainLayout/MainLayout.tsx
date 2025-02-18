import { Outlet } from "react-router-dom"
import Header from "@components/common/Header"
import Footer from "@components/common/Footer"
function MainLayout() {
    return (
        <>
            <Header />
            <div className="w-3/4 m-auto ">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout