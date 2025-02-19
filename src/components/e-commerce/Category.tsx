
import { Link } from "react-router-dom"
import { Trecord } from "@customTypes/category"

function Category({ id, title, prefix, img }: Trecord) {
    console.log(img)
    return (
        <>
            <Link to={`products/${prefix}`}>
                <div key={id}>
                    <img src={img} alt="title" className="rounded-full w-1/2" />
                    <p>{title}</p>
                </div>
            </Link>

        </>
    )
}

export default Category