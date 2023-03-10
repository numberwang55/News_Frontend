import { useParams } from "react-router"
import { useEffect, useState } from "react"
import Votes from "./Votes"
import { getArticleById } from "../../utils/api"
import Loading from "../Loading"
import Comments from "./Comments"
import { dateFormatter } from "../../utils/dateFormatter"
import { Link } from "react-router-dom"

export default function SingleArticle({ vote, setVote }) {

    const [singleArticle, setSingleArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const { article_id } = useParams()
    const { title, topic, author, article_img_url, body, created_at, comment_count, votes } = singleArticle
    const [error, setError] = useState(null)

    const date = dateFormatter(created_at, author)

    useEffect(() => {
        getArticleById(article_id)
            .then((articleFromApi) => {
                setSingleArticle(articleFromApi)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [article_id])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return (
            <section className="error">
                <Link to="/articles"><h2>Articles</h2></Link>
                <br />
                <h2>404 - Article not found</h2>
            </section>
        )
    }

    return (
        <div className="single-article-container">
            <Link to="/"><h2>Home</h2></Link>
            <section className="single-article-container">
                <article className="single-article-container-card">
                    <h2>{title}</h2>
                    <div className="single-article-container-topic-votes">
                        <p>{topic[0].toUpperCase() + topic.slice(1,)}</p>
                        <Votes vote={vote} setVote={setVote} article_id={article_id} votes={votes} />
                    </div>
                    <img
                        src={article_img_url}
                        alt={title}
                        className="single-article-container-card-image"
                    />
                    <p>{body}</p>
                    <p>{date}</p>
                    <p>Comments: {comment_count}</p>
                </article>
            </section>
            <Comments article_id={article_id} />
        </div>
    )
}