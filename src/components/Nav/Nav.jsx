import { useEffect, useState } from "react"
import { getTopics } from "../../utils/api"
import { Link } from "react-router-dom"

export default function Nav() {

    const [retrievedTopics, setRetrievedTopics] = useState([])

    useEffect(() => {
        getTopics()
            .then((topicsFromApi) => {
                setRetrievedTopics(topicsFromApi)
            })
    }, [])

    return (
        <nav>
            <Link to="/" key="all-articles">All</Link>
            {retrievedTopics.map(topic => {
                return (
                    <div>
                        <Link to={`/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                    </div>
                )
            })}
        </nav>
    )
}