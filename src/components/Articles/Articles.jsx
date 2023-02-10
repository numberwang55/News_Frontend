import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "../Loading"
import Nav from "./Nav"
import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export default function Articles({ topics }) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const { topic } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({ sort: "created_at", order: "desc" })
    const sortBy = searchParams.get("sort_by")
    const order = searchParams.get("order")
    const [error, setError] = useState(null)

    useEffect(() => {
        getArticles(topic, sortBy, order)
            .then((articles) => {
                setArticles(articles)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [topic, sortBy, order])

    if (error) {
        return (
            <section>
                <h2>404 - Url not found</h2>
            </section>
        )
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <Nav />
            <section className="articles-sort-by">
                <select name="sort-by" id="sort-by" onChange={(e) => setSearchParams({ sort_by: e.target.value, order: order })}>
                    <option value="created_at" defaultValue={"created_at"}>Sort By</option>
                    <option value="comment_count" key="comment_count">Comment Count</option>
                    <option value="created_at" key="created_at">Date</option>
                    <option value="votes" key="votes">Votes</option>
                </select>
                <select name="order" id="order" onChange={(e) => setSearchParams({ sort_by: sortBy, order: e.target.value })}>
                    <option value="desc" defaultValue={"desc"}>Order</option>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
                <button onClick={() => setSearchParams({})}>Reset</button>
            </section>
            <main className="articles-container">
                {articles.map(article => {
                    return <ArticleCard {...article} key={article.article_id} ></ArticleCard>
                })}
            </main>
        </div>
    )
}

