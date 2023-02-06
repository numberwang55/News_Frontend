import { useState } from "react"
import ArticleCard from "./ArticleCard"


export default function Articles() {

    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true) 
    const [sortBy, setSortBy] = useState("created_at")
    const [order, orderBy] = useState("desc")

    return (
        <main className="articles">
            <ArticleCard></ArticleCard>
        </main>
    )
}