import { useState } from "react"
import Votes from "./Votes"

export default function ArticleCard() {

    const [votes, setVotes] = useState(0)

    return (
        <div className="article-card">
            <h3>Article Card</h3>
            <p>Topic</p>
            <p>Author</p>
            <Votes></Votes>
            <p>Image</p>
            <p>Body</p>
            <p>Date</p>
            <p>Comments Count</p>
        </div>
    )
}