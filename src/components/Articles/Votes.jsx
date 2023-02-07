import { patchVote } from "../../utils/api"

export default function Votes({ vote, setVote, article_id, votes }) {

    return (
        <div className="votes">
            <p>Votes: {votes}</p>
            <div className="votes-buttons">
                <button>Minus</button>
                <button>Plus</button>
            </div>
        </div>
    )
}