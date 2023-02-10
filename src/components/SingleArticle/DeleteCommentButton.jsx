import { deleteComment } from "../../utils/api"

export default function DeleteCommentButton({ comment_id, setDeletedCommentId }) {

    const handleDeleteClick = () => {
        deleteComment(comment_id)
            .catch((err) => {
                console.log(err)
            })
        setDeletedCommentId(comment_id)
    }

    return (
        <div>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}