import { patchVote } from "../../utils/api"

export default function Votes({ vote, setVote, article_id, votes }) {

    const voteOnArticle = (vote) => {
        setVote(votes)
        patchVote(article_id, vote).catch((err) => {
            console.log(err)
        })
        console.log(votes)
    }

    return (
        <div className="votes">
            <p>Votes: {votes}</p>
            <div className="votes-buttons">
                <button onClick={() => voteOnArticle(-1)}>Minus</button>
                <button onClick={() => voteOnArticle(1)}>Plus</button>
            </div>
        </div>
    )
}