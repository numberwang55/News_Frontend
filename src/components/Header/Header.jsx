import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import CurrentUser from "./CurrentUser"

export default function Header() {

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <header>
            {/* {user !== "" ? <p>User: {user}</p> : <p>Please select a user</p>} */}
            <CurrentUser></CurrentUser>
            <h1>NC News</h1>
            {/* <div> */}
                <Link to="/users"><span>Users</span></Link>
            {/* </div> */}
        </header>
    )
}