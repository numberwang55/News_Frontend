
export default function CommentCard({ author, body, comment_id, created_at, votes }) {

    return (
        <div className="comments-container-card">
            <p>Comment from: {author}</p>
            <p>{body}</p>
            <p>Votes: {votes}</p>
            <p>Date: {created_at}</p>
        </div>
    )
}