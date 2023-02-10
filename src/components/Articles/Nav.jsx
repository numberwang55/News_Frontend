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
            <Link to="/" key="all-articles"><h2>All</h2></Link>
            {retrievedTopics.map(topic => {
                const capitalisedTopic = topic.slug[0].toUpperCase() + topic.slug.slice(1,)
                return (
                    <Link to={`/${topic.slug}`} key={topic.slug}><h2>{capitalisedTopic}</h2></Link>
                )
            })}
        </nav>
    )
}