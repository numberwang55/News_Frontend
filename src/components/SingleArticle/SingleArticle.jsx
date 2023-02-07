import { useParams } from "react-router"
import { useEffect, useState } from "react"
import ArticleCard from "../Articles/ArticleCard"
import { getArticleById } from "../../utils/api"
import Loading from "../Loading"

export default function SingleArticle() {

    const [singleArticle, setSingleArticle, loading, setLoading] = useState({}, true)
    const { article_id } = useParams()
    console.log(article_id)

    useEffect(() => {
        getArticleById()
    })

    if (loading) {
        return <Loading/>
    }

    return (
        <div className="single-article">
            <p>Single Article</p>
        </div>
    )
}