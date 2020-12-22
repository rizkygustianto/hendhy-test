const { Post } = require('../models')

class PostController {
    static getPosts(req,res) {
        Post.findAll()
        .then(result => {
            res.status(200).json(result)
        })
    }
}

module.exports = PostController