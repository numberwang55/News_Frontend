import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { postComment } from "../../utils/api"

export default function AddComment({ article_id, setComments }) {

    const { user } = useContext(UserContext)
    const [newComment, setNewComment] = useState("")
    const [status, setStatus] = useState("")
    const [postingComment, setPostingComment] = useState("")

    const onChangeHandler = (e) => {
        setNewComment(() => {
            return e.target.value
        })
    }

    const handleSubmit = (e) => {
        setPostingComment("posting")
        setStatus("Posting comment to article...")
        e.preventDefault()
        if (user.username !== "Unknown") {
            postComment(article_id, user.username, newComment)
                .then((postedComment) => {
                    setPostingComment("posted")
                    setStatus("Your comment has been posted")
                    setComments((curentComments) => {
                        return [postedComment, ...curentComments,]
                    }).catch((err) => {
                        setPostingComment("error")
                        setStatus("Error - Please refresh or try again later!")
                        setComments((currComments) => {
                            const previousCommentsFromApi = [...currComments]
                            previousCommentsFromApi.shift()
                            return previousCommentsFromApi
                        })
                    })
                })
            setNewComment("")
        } else {
            setPostingComment("unknown")
            setStatus("Please select a user first!")
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setNewComment("")
    }

    if (user.username === "Unknown") {
        return (
            <div className="add-comment-container-error">
                <p>Please select a user first!</p>
                <br />
                <Link to="/users">Users</Link>
            </div>
        )
    }

    if (status !== "") {
        return (
            <div className="add-comment-container-error">
                <p>{status}</p>
                <br />
                {status === "Please select a user first!" ?
                    <Link to="/users">Users</Link>
                    : ""
                }
            </div>
        )
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