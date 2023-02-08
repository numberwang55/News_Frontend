import Votes from "./Votes"
import { Link } from "react-router-dom"
import { dateFormatter } from "../../utils/dateFormatter"

export default function ArticleCard({ article_id, title, topic, author, article_img_url, body, created_at, comment_count, votes, vote, setVote }) {

    const date = dateFormatter(created_at)

    return (
        <article className="articles-container-card">
            <h2 className="articles-container-card-title"><Link className="articles-container-card-link" to={`/article/${article_id}`}>{title}</Link></h2>
            <div className="articles-container-topic-author-votes">
                <div className="articles-container-topic-author">
                    <p>Topic: {topic}</p>
                    <p>Author: {author}</p>
                </div>
                <Votes vote={vote} setVote={setVote} article_id={article_id} votes={votes}/>
                
            </div>
            <img
                src={article_img_url}
                alt={title}
                className="articles-container-card-image"
            />
            <p>{body}</p>
            <p>{date}</p>
            <p>Comments: {comment_count}</p>
        </article>
    )
}