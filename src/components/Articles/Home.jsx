import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import { Link } from "react-router-dom"
import ArticleCard from "./ArticleCard"

export default function Home({ articles, setArticles }) {

    const [isArticleForHomePage, setIsArticleForHomePage] = useState(false)

    useEffect(() => {
        getArticles()
            .then((articles) => {
                setArticles(articles[0])
                setIsArticleForHomePage(true)
            })
    }, [setArticles])

    return (
        <section>
            <Link to="/articles"><h2>Articles</h2></Link>
            <br />
            <h2>Most recent Article</h2>
            <div className="home-article-container">
                <ArticleCard {...articles} isArticleForHomePage={isArticleForHomePage}/>
            </div>
        </section>
    )
}