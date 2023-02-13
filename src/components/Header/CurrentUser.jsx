import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import defaultUser from "../../images/default-user-icon.jpg"

export default function CurrentUser() {

    const { user } = useContext(UserContext)

    return (
        <div className="current_user-container">
            <p>Current User:</p>
            <p>{user.username}</p>
            <img src={user.avatar_url !== "" ? user.avatar_url : defaultUser} alt={user.username} />
        </div>
    )
}