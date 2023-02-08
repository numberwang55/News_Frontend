import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { postComment } from "../../utils/api"

export default function AddComment({ article_id, setComments }) {

    const [newComment, setNewComment] = useState("")
    const { user } = useContext(UserContext)
    const [error, setError] = useState(null)

    const onChangeHandler = (e) => {
        setNewComment(() => {
            return e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user !== "") {
            postComment(article_id, user, newComment)
                .then((postedComment) => {
                    setComments((curentComments) => {
                        return [postedComment, ...curentComments,]
                    }).catch((err) => {
                        setError("Please refresh or try again later!")
                    })
                })
        } else {
            setError("Please select a user first!")
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setNewComment("")
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="add-comment-container">
            <form className="add-comment-container-form">
                <label htmlFor="comment-body"></label>
                <textarea
                    id="comment-body"
                    className="add-comment-container-input"
                    type="text"
                    value={newComment}
                    placeholder="Add a comment..."
                    onChange={onChangeHandler}
                    // rows="5"
                    // cols="50"
                    required
                />
                <br />
                <div className="add-comment-container-form-button">
                    <button onClick={handleCancel} className="add-comment-container-form-button-cancel">Cancel</button>
                    <button className="add-comment-container-form-button-comment" onClick={handleSubmit} disabled={newComment === ""}>Comment</button>
                </div>
            </form>
        </div>
    )
}