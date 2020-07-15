const Post = require('../models/Post');

const mongoose = require('mongoose');

exports.posts_get_all = (req, res, next) => {
  Post.find()
    .select('name price _id PostImage')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        Posts: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            PostImage: doc.PostImage,
            request: {
              type: 'GET',
              url: 'http://localhost:3001/Posts/' + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.posts_create_post = (req, res, next) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    postImage: req.file.path,
  });

  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created post successfully',
        createdPost: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: 'GET',
            url: 'http://localhoost:3001/posts/' + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.posts_get_post = (req, res, next) => {
  const id = req.params.postId;
  Post.findById(id)
    .select('name price _id postImage')
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json({
          post: doc,
          request: {
            type: 'GET',
            url: 'http://localhost/rpoducts',
          },
        });
      } else {
        res
          .status(404)
          .json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.posts_update_post = (req, res, next) => {
  const id = req.params.postId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  //res.status(200).json({
  //  message: "Updated post!",
  //});
  Post.update(
    { _id: id },
    { $set: updateOps },
    //{ $set: { name: req.body.newName, price: req.body.newPrice } },
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: 'Post Updated',
        request: {
          type: 'GET',
          url: 'Http://localhost:3001/posts/',
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.posts_delete_post = (req, res, next) => {
  const id = req.params.postId;
  Post.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        messageq: 'Post deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3001/posts',
          body: { name: 'String', price: 'Number' },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
