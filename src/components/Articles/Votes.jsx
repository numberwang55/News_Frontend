

export default function Votes({ votes }) {
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