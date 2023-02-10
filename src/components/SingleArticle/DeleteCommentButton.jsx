import { deleteComment } from "../../utils/api"

export default function DeleteCommentButton({ comment_id, setDeletedCommentId, error, setError }) {

    const handleDeleteClick = () => {
        deleteComment(comment_id)
            .catch((err) => {
                setError("Something went wrong. Please refresh or try again later.")
            })
        setDeletedCommentId(comment_id)
    }

    return (
        <div>
            <br />
            <button onClick={handleDeleteClick}>Delete</button>
            <p>{error ? error : ""}</p>
        </div>
    )
}