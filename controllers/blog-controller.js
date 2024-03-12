const Post = require('../models/post');

module.exports = class blogController {
  static getBlogPage = (req, res, next) => {
    Post
      .find()
      .sort({ createdAt: -1 })
      .then(posts => res.render('blog', { title: 'Блог', posts }))
  }
  static getOnePostPage = async (req, res, next) => {
    const miniPosts = await Post.aggregate(
      [{ $sample: { size: 3 } }]
    );
    Post
      .findById(req.params.id)
      .then(post => res.render('post', { title: 'Пост', post, miniPosts }))
  }
}