import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { postComment } from "../../utils/api"

export default function AddComment({ article_id, setComments }) {

    const [newComment, setNewComment] = useState("")
    const { user } = useContext(UserContext)
    const [error, setError] = useState(null)
    const [postingComment, setPostingComment] = useState(false)

    const onChangeHandler = (e) => {
        setNewComment(() => {
            return e.target.value
        })
    }

    const handleSubmit = (e) => {
        setPostingComment(true)
        e.preventDefault()
        if (user.username !== "Unknown") {
            postComment(article_id, user.username, newComment)
                .then((postedComment) => {
                    setComments((curentComments) => {
                        return [postedComment, ...curentComments,]
                    }).catch((err) => {
                        setError("Please refresh or try again later!")
                    })
                })
            setPostingComment(false)
            setNewComment("")
        } else {
            setError("Please select a user first!")
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setNewComment("")
    }

    if (error) {
        return (
            <div className="add-comment-container-error">
                <p>{error}</p>
                <br />
                <Link to="/users">Users</Link>
            </div>
        )
    }

    if (postingComment) {
        return <p>Posting comment to article...</p>
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