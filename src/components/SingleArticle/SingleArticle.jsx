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
                    <h2>{singleArticle.title}</h2>
                    <div className="articles-container-topic-author-votes">
                        <div className="articles-container-topic-author">
                            <p>Topic: {singleArticle.topic}</p>
                            <p>Author: {singleArticle.author}</p>
                        </div>
                        <Votes votes={votes} />
                    </div>
                    <img
                        src={singleArticle.article_img_url}
                        alt={singleArticle.title}
                        className="articles-container-card-image"
                    />
                    <p>{singleArticle.body}</p>
                    <p>{singleArticle.created_at}</p>
                    <p>Comments: {singleArticle.comment_count}</p>
                </article>
            </section>
            <Comments />
        </div>
    )
}