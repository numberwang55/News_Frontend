import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function UsersCard({ username, name, avatar_url }) {

    const {setUser} = useContext(UserContext)

    return (
        <ul className="users-list">
            <li>{username}</li>
            <li>{name}</li>
            <li><button onClick={() => setUser(username)}>Sign in</button></li>
            <img src={avatar_url} alt={username} />
        </ul>
    )
}