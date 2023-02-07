import CommentCard from "./CommentCard"
import AddComment from "./AddComment"
import { useEffect, useState } from "react"
import { getComments } from "../../utils/api"

export default function Comments({ article_id }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article_id)
            .then((comments) => {
                console.log(comments)
            })
    }, [article_id])

    return (
        <section className="comments">
            <AddComment></AddComment>
            <CommentCard></CommentCard>
        </section>
    )
}