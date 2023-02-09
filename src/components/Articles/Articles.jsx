import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "../Loading"
import Nav from "./Nav"

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
        <div>
            <Nav />
            <section className="articles-sort-by">
            <select name="sort-by" id="sort-by">
                    <option value="created_at" default>Sort By</option>
                    <option value="created_at" key="created_at">Date</option>
                    <option value="article_id" key="article_id">Article ID</option>
                    <option value="votes" key="votes">Votes</option>
                </select>
                <select name="order" id="order">
                    <option value="desc">Order</option>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </section>
            <main className="articles-container">
                {articles.map(article => {
                    return <ArticleCard {...article} key={article.article_id} ></ArticleCard>
                })}
            </main>
        </div>
    )
}

