import { dateFormatter } from "../../utils/dateFormatter"
import { UserContext } from "../../contexts/UserContext"
import { useContext, useState } from "react"
import DeleteCommentButton from "./DeleteCommentButton"

export default function CommentCard({ author, body, comment_id, created_at, votes, author, deletedCommentId, setDeletedCommentId }) {

    const date = dateFormatter(created_at, author)
    const { user } = useContext(UserContext)

    if (deletedCommentId === comment_id) {
        return (
            <div className="comments-container-card">
                <p>Comment Deleted</p>
            </div>
        )
    }

    return (
        <div className="comments-container-card">
            <p>{body}</p>
            <p>{date}</p>
            <p>Votes: {votes}</p>
            {user.username === author ? <DeleteCommentButton comment_id={comment_id} setDeletedCommentId={setDeletedCommentId} /> : ""}
        </div>
    )
}