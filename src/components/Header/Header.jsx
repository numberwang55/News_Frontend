import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import CurrentUser from "./CurrentUser"

export default function Header() {

    const { user } = useContext(UserContext)

    return (
        <header>
            <CurrentUser></CurrentUser>
            <h1>NC News</h1>
            <Link to="/users"><span>Users</span></Link>
        </header>
    )
}