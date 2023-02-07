import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import ArticleCard from "./ArticleCard"


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
    }, [])

    if (loading) {
        return <img src="https://media3.giphy.com/media/cge9nG7e7wKWbMm9cY/giphy.gif?cid=ecf05e47u0z47v7u5l0ws5fyh44frce6unogttvosjw8l80z&rid=giphy.gif&ct=g" alt="Loading" />
    }

    return (
        <main className="articles-container">
            <section className="articles-container-sort-by">
                <p>Sort by</p>
                <button>Select</button>
            </section>
            {articles.map(article => {
                return <ArticleCard article={article} key={article.article_id} ></ArticleCard>
            })}
        </main>
    )
}