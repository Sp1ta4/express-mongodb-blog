const Post = require('../models/post');
const path = require('path');

module.exports = class writePostController {
  static getWritePostPage = (req, res, next) => {
    try {
      res.render('writePost', { title: 'Написать пост' })
    } catch (error) {
      res.render('error');
      console.log(error);
    }
  }

  static writePost = (req, res, next) => {
    const post = new Post({ ...req.body, image: path.resolve(__dirname, '..', 'uploads', req.file.path) });
    post
      .save()
      .then((result) => res.redirect('/blog'))
      .catch(error => {
        console.error('Ошибка при сохранении поста:', error);
        next(error);
      });
  }
}