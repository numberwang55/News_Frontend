import { Link } from "react-router-dom"
import { dateFormatter } from "../../utils/dateFormatter"

export default function ArticleCard({ article_id, title, topic, author, article_img_url, body, created_at, comment_count, votes }) {

    const date = dateFormatter(created_at, author)
    const capitalisedTopic = topic[0].toUpperCase() + topic.slice(1,)

    return (
        <article className="articles-container-card">
            <h2 className="articles-container-card-title"><Link className="articles-container-card-link" to={`/article/${article_id}`}>{title}</Link></h2>
            <div className="articles-container-topic-votes">
                <p>{capitalisedTopic}</p>
                <p>Votes: {votes}</p>
            </div>
            <img
                src={article_img_url}
                alt={title}
                className="articles-container-card-image"
            />
            <p className="articles-container-card-date">{date}</p>
            <p className="articles-container-card-comments">Comments: {comment_count}</p>
        </article>
    )
}