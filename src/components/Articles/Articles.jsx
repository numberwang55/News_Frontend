import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "../Loading"
import Nav from "./Nav"
import { useParams } from "react-router-dom"

export default function Articles({ topics }) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const { topic } = useParams()

    useEffect(() => {
        getArticles(topic)
            .then((articles) => {
                setArticles(articles)
                setLoading(false)
            })
    }, [topic])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <Nav />
            <section className="articles-sort-by">
                <p>Sort by</p>
                <button>Select</button>
            </section>
            <main className="articles-container">
                {articles.map(article => {
                    return <ArticleCard {...article} key={article.article_id} ></ArticleCard>
                })}
            </main>
        </div>
    )
}

