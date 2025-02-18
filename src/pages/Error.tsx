import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom"


function Error() {
    const error = useRouteError()
    let errorStatus: number
    let errortext: string
    if (isRouteErrorResponse(error)) {
        errorStatus = error.status
        errortext = error.statusText
    } else {
        errorStatus = 404
        errortext = "page not found"
    }
    return (
        <>
            <div className="w-1/2 m-auto mt-56 text-center">
                <h1 className="text-9xl font-bold">{errorStatus}</h1>
                <p className="text-lg my-3">{errortext}</p>
                <Link to='/' replace={true} className="underline text-blue-600">How about going back to safety?</Link>
            </div>
        </>
    )
}

export default Error