
export default function AddComment() {
    return (
        <section className="add-comment-container">
            <form action="" className="comment-form">
            <label htmlFor="comment-body">Comment</label>
                <input
                    id="comment-body"
                    type="text"
                    // value={}
                    placeholder="Add your comment here"
                    required
                    />
            </form>
        </section>
    )
}