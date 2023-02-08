import { patchVote } from "../../utils/api"

export default function Votes({ vote, setVote, article_id, votes }) {

    const [error, setError] = useState("")

    const updateVoteNum = (num) => {
        setVote((currVote) => {
            return currVote + num;
        })
        patchVote(article_id, num).catch((err) => {
            setVote((currVote) => {
                return currVote - num;
            })
            setError("Something went wrong!")
        })
    }

    if (error !== "") {
        return <p>{error}</p>
    }

    return (
        <div className="votes">
            <p>Votes: {votes + vote}</p>
            <div className="votes-buttons">
                <button onClick={() => updateVoteNum(-1)} value="-1">👎</button>
                <button onClick={() => updateVoteNum(1)} value="1">👍</button>
            </div>
        </div>
    )
}