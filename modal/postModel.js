const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    node_id: {
        type: String,
        required: true
    },
    avatar_url: {
        type: String,
        required: true
    },
    gravatar_id: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    html_url: {
        type: String,
        required: true
    },
    followers_url: {
        type: String,
        required: true
    },
    following_url: {
        type: String,
        required: true
    },
    gists_url: {
        type: String,
        required: true
    },
    starred_url: {
        type: String,
        required: true
    },
    subscriptions_url: {
        type: String,
        required: true
    },
    organizations_url: {
        type: String,
        required: true
    },
    repos_url: {
        type: String,
        required: true
    },
    events_url: {
        type: String,
        required: true
    },
    received_events_url: {
        type: String,
        required: true
    }
    , type: {
        type: String
    },
    site_admin: {
        type: String,
        required: true
    }
})
const Post = mongoose.model("git-1", postSchema)
module.exports = Post