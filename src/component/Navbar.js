import {Link} from "react-router-dom";

export function Navbar() {
    return(
        <>
        <h1><Link to={'/products/list'}>List Product</Link></h1>
            <h1><Link to={'/products/create'}>Create</Link></h1>
        </>
    )
}