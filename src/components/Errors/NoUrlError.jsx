import { Link } from "react-router-dom"

export default function NoUrlError() {
    return (
        <div>
            <Link to="/"><h2>Home</h2></Link>
            <br />
            <h2>404 - Url not found</h2>
        </div>
    )
}