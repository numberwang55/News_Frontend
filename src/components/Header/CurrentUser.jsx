import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function CurrentUser() {

    const { user } = useContext(UserContext)

    return (
        <div className="current_user-container">
            <p>Current User:</p>
            <p>{user.username}</p>
            {/* <p>Name: {user.name}</p> */}
            <img src={user.avatar_url} alt={user.username} />
        </div>
    )
}