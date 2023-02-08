import { useEffect, useState } from "react"
import { getUsers } from "../../utils/api"
import UsersCard from "./UsersCard"

export default function Users() {

    const [usersFromApi, setUsersFromApi] = useState([])

    useEffect(() => {
        getUsers()
            .then((usersFromApi) => {
                setUsersFromApi(usersFromApi)
            })
    })

    return (
        <div className="users">
            {usersFromApi.map(user => {
                return <UsersCard {...user} key={user.username}/>
            })}
        </div>
    )
}