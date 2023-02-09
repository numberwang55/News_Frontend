import { dateFormatter } from "../../utils/dateFormatter"

export default function CommentCard({ author, body, comment_id, created_at, votes }) {

    const date = dateFormatter(created_at, author)

    return (
        <div className="comments-container-card">
            <p>{body}</p>
            <p>{date}</p>
            <p>Votes: {votes}</p>
        </div>
    )
}