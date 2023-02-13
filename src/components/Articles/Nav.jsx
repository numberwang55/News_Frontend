import { useEffect, useState } from "react"
import { getTopics } from "../../utils/api"
import { Link } from "react-router-dom"

export default function Nav() {

    const [retrievedTopics, setRetrievedTopics] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getTopics()
            .then((topicsFromApi) => {
                setLoading(false)
                setRetrievedTopics(topicsFromApi)
            })
            .catch((err) => {
                setLoading(false)
                setError(err)
            })
    }, [])

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
                <br />
            </div>
        )
    }

    if (error) {
        return (
            <section>
                <Link to="/"><h2>Home</h2></Link>
                <br />
                <h2>404 - Topic not found</h2>
            </section>
        )
    }

    return (
        <section>
            <Link to="/"><h2>Home</h2></Link>
            <br />
            <nav>
                <Link to="/articles" key="all-articles"><h2>All</h2></Link>
                {retrievedTopics.map(topic => {
                    const capitalisedTopic = topic.slug[0].toUpperCase() + topic.slug.slice(1,)
                    return (
                        <Link to={`/articles/${topic.slug}`} key={topic.slug}><h2>{capitalisedTopic}</h2></Link>
                    )
                })}
            </nav>
        </section>
    )
}