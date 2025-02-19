import { TProRecord } from "@customTypes/product"
function Product({id,title,price,img}:TProRecord) {
    console.log(img)
    return (
        <>
        <div key={id}>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <button>add to cart</button>
        </div>
        </>
    )
}

export default Product