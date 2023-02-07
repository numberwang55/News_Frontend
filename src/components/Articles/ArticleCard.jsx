import { useState } from "react"
import Votes from "./Votes"
import { Link } from "react-router-dom"

export default function ArticleCard({ article }) {

    const [votes, setVotes] = useState(0)

    return (
        <article className="articles-container-card">
            <h2><Link to={`/article/${article.article_id}`}>{article.title}</Link></h2>
            <div className="topic-author-votes">
                <div className="topic-author">
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                </div>
                <Votes votes={votes} />
            </div>
            <img
                src={article.article_img_url}
                alt={article.title}
                className="articles-container-card-image"
            />
            <p>{article.body}</p>
            <p>{article.created_at}</p>
            <p>Comments: {article.comment_count}</p>
        </article>
    )
}