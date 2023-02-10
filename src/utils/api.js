import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://news-backend-njz3.onrender.com/api"
})

//removed topic from params
// topic, sortBy="created_at", orderBy = "asc"
export const getArticles = (topic, sortBy, orderBy) => {
    return newsApi.get("/articles", {
        params: {
            topic: topic,
            sort_by: sortBy,
            order: orderBy
        }
    })
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

export const getTopics = () => {
    return newsApi.get("/topics")
        .then(({ data: { topics } }) => {
            return topics
        })
}