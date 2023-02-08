import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "../Loading"

export default function Articles({ topic }) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [sortBy, setSortBy] = useState("created_at")
    const [order, orderBy] = useState("desc")

    useEffect(() => {
        getArticles()
            .then((articles) => {
                setArticles(articles)
                setLoading(false)
            })
    }, [topic])

    if (loading) {
        return <Loading />
    }

    return (
        <main className="articles-container">
            <section className="articles-container-sort-by">
                <p>Sort by</p>
                <button>Select</button>
            </section>
            {articles.map(article => {
                return <ArticleCard {...article} key={article.article_id} ></ArticleCard>
            })}
        </main>
    )
}