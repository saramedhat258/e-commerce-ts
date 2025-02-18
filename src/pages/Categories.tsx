
import Category from "@components/e-commerce/Category"
function Categories() {
    return (
        <div>
            <div className="grid grid-cols-4 justify-between mt-10">
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                </div>
        </div>
    )
}

export default Categories