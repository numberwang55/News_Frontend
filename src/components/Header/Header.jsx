import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function Header() {

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <header>
            {user !== "" ? <p>User: {user}</p> : <p>Please select user</p>}
            <h1>NC News</h1>
            {/* <div> */}
                <Link to="/users"><p>Users</p></Link>
            {/* </div> */}
        </header>
    )
}