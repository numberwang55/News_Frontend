import { patchVote } from "../../utils/api"
import { useState } from "react"

export default function Votes({ article_id, votes }) {

    const [vote, setVote] = useState(0)
    const [error, setError] = useState("")

    const updateVoteNum = (num) => {
        setVote((currVote) => {
            return currVote + num;
        })
        patchVote(article_id, num).catch((err) => {
            setError("Please refresh or try again later!")
            setVote((currVote) => {
                return currVote - num;
            })
        })
    }

    if (error !== "") {
        return (
            <div className="votes-error">
                <p>Votes: {votes + vote}</p>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className="votes">
            <p>Votes: {votes + vote}</p>
            <div className="votes-buttons">
                <button onClick={() => updateVoteNum(-1)} disabled={vote === -1}>👎</button>
                <button onClick={() => updateVoteNum(1)} disabled={vote === 1} >👍</button>
            </div>
        </div>
    )
}