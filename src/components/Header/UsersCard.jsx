import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Link } from "react-router-dom"

export default function UsersCard({ username, name, avatar_url }) {

    const { setUser } = useContext(UserContext)

    return (
        <ul className="users-container-users_list">
            <li><p className="username">Username: {username}</p></li>
            <li><p className="name">Name: {name}</p></li>
            <img src={avatar_url} alt={username} />
            <br />
            <Link to="/">
                <button onClick={() => setUser({
                    username: username,
                    name: name,
                    avatar_url: avatar_url
                })}>Select</button>
            </Link>
        </ul>
    )
}