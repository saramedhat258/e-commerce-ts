import Product from "@components/e-commerce/Product"
function Products() {
    return (
        <>
                <div className="grid grid-cols-4 justify-between mt-10">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
        </>
    )
}

export default Products