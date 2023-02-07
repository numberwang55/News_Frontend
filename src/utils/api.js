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
        .then(({ data: { article } }) => {
            return {...article}
        })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments
        })
}

export const patchVote = (article_id, vote) => {
    return newsApi.patch(`/articles/${article_id}`, {inc_votes: vote})
        .then((res) => {
            return res
        })
}