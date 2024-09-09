
const postService = require("../services/posts.service");

exports.createPost = async (req, res, next) => {
  try {
    const body = {
      title: req.body.title,
      content: req.body.content,
      userId: req.user.userId,
    };
    const response = await postService.createPost(body);
    res.status(200).json(response);
  } catch (err) {

    next(err);
  }
};
exports.getAllPosts = async (req, res, next) => {
  try {
 
    const response = await postService.getAllPosts();
    res.status(200).json(response);
  } catch (err) {

    next(err);
  }
};
exports.getPostByIdWithUserDetails = async (req, res, next) => {
  try {
 
    const response = await postService.getPostWithUserDetails(req.params.id);
    res.status(200).json(response);
  } catch (err) {

    next(err);
  }
};
exports.updateByIdWithUserDetails = async (req, res, next) => {
  try {
    const updatePost = req.body
    const response = await postService.updatePostWithUserDetails(req.params.id,updatePost);
    res.status(200).json(response);
  } catch (err) {

    next(err);
  }
};
exports.deleteByIdWithUserDetails = async (req, res, next) => {
  try {
    const response = await postService.deletePostWithUserDetails(req.params.id);
    res.status(200).json(response);
  } catch (err) {

    next(err);
  }
};

