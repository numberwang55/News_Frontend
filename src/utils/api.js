import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://news-backend-njz3.onrender.com/api"
})

export const getArticles = (sort_by = "created_at", order = "desc", topic = false, author = "") => {
    return newsApi.get("/articles")
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
        .then(({article}) => {
            console.log(article);
        })
}