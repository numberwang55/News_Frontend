import { useParams } from "react-router"
import { useEffect, useState } from "react"
import Votes from "../Articles/Votes"
import { getArticleById } from "../../utils/api"
import Loading from "../Loading"
import Comments from "./Comments"

export default function SingleArticle({votes}) {

    const [singleArticle, setSingleArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const { article_id } = useParams()
    const {title, topic,author, article_img_url, body, created_at, comment_count} = singleArticle
    
    useEffect(() => {
        getArticleById(article_id)
            .then((articleFromApi) => {
                console.log(articleFromApi)
                setSingleArticle(articleFromApi)
                setLoading(false)
            })
    }, [article_id])

    if (loading) {
        return <Loading />
    }

    return (
        <div className="single-article-container">
            <section className="articles-container">
                <article className="articles-container-card">
                    <h2>{title}</h2>
                    <div className="articles-container-topic-author-votes">
                        <div className="articles-container-topic-author">
                            <p>Topic: {topic}</p>
                            <p>Author: {author}</p>
                        </div>
                        <Votes votes={votes} />
                    </div>
                    <img
                        src={article_img_url}
                        alt={title}
                        className="articles-container-card-image"
                    />
                    <p>{body}</p>
                    <p>{created_at}</p>
                    <p>Comments: {comment_count}</p>
                </article>
            </section>
            <Comments />
        </div>
    )
}