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
            return { ...article }
        })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments
        })
}

export const patchVote = (article_id, vote) => {
    return newsApi.patch(`/articles/${article_id}`, { inc_votes: vote })
        .then((res) => {
            return res
        })
}

export const getUsers = () => {
    return newsApi.get("/users")
        .then(({ data: { users } }) => {
            return users
        })
}

export const postComment = (article_id, user, comment) => {
    const commentObj = {
        username: user,
        body: comment
    }
    return newsApi.post(`/articles/${article_id}/comments`, commentObj)
        .then(({ data: { comment } }) => {
            return comment
        })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`)
}