import { useEffect, useState } from "react"
import { getUsers } from "../../utils/api"
import UsersCard from "./UsersCard"
import { Link } from "react-router-dom"

export default function Users() {

    const [usersFromApi, setUsersFromApi] = useState([])

    useEffect(() => {
        getUsers()
            .then((usersFromApi) => {
                setUsersFromApi(usersFromApi)
            })
    })

    return (
        <div>
            <Link to="/"><h2>Home</h2></Link>
            <div className="users-container">
                {usersFromApi.map(user => {
                    return <UsersCard {...user} key={user.username} />
                })}
            </div>
        </div>
    )
}