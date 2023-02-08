import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function Header() {

    const {user} = useContext(UserContext)
    console.log(user)

    return (
        <header>
            <h1>NC News</h1>
            <Link to="/users"><p>Users</p></Link>
            <p>Logged in as: {user}</p>
        </header>
    )
}