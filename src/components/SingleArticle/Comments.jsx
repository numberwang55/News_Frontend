import CommentCard from "./CommentCard"
import AddComment from "./AddComment"

export default function Comments() {
    return (
        <section className="comments">
            <AddComment></AddComment>
            <CommentCard></CommentCard>
        </section>
    )
}