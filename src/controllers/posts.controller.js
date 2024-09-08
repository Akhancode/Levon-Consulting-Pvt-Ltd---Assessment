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
exports.getPostByIdWithUserDetails = async (req, res, next) => {
  try {
 
    const response = await postService.getPostWithUserDetails(req.params.id);
    res.status(200).json(response);
  } catch (err) {

    next(err);
  }
};

