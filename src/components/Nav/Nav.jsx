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
            {retrievedTopics.map(topic => {
                return (
                    <div>
                        <Link to="/" key="all-articles">All</Link>
                        <Link to={`/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                    </div>
                )
            })}
        </nav>
    )
}