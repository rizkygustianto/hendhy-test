const route = require('express').Router()
const PostController = require('../controllers/PostController')

route.get('/posts', PostController.getPosts)

module.exports = route