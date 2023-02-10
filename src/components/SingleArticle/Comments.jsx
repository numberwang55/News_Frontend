import CommentCard from "./CommentCard"
import AddComment from "./AddComment"
import { useEffect, useState } from "react"
import { getComments } from "../../utils/api"
import Loading from "../Loading"

export default function Comments({ article_id }) {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [deletedCommentId, setDeletedCommentId] = useState(-1)

    useEffect(() => {
        getComments(article_id)
            .then((comments) => {
                setComments(comments)
                setLoading(false)
            })
    }, [article_id, deletedCommentId])

    if (loading) {
        return <Loading />
    }

    return (
        <section className="comments-container">
            <h3>Comments</h3>
            <AddComment article_id={article_id} setComments={setComments}></AddComment>
            {comments.length === 0
                ? <section>
                    <img src="https://media2.giphy.com/media/bElFigrnijrGxFtxuF/giphy.gif?cid=ecf05e47v5o4258x9ff3ewd9ejzfdzae21vy3vm1e7uuwtvs&rid=giphy.gif&ct=s" alt="No Comments" />
                    <p>No comments for this article. Be the first to comment above!</p>
                </section>
                : comments.map(comment => {
                    return <CommentCard {...comment} key={comment.comment_id} deletedCommentId={deletedCommentId} setDeletedCommentId={setDeletedCommentId} ></CommentCard>
                })}
        </section>
    )
}