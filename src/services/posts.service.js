const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { CustomError, DatabaseError, NotFoundError, ValidationError } = require("../utils/errors/error");
const { default: mongoose } = require("mongoose");
const Post = require("../model/post.model");

const SECRET_KEY = process.env.SECRET_KEY
exports.createPost = async (postData) => {
  try {
    const newPost = new Post(postData);
    await newPost.save();
    return newPost;
  } catch (error) {
    console.log(error)
    throw new DatabaseError("Error creating post.");
  }
};
exports.getPostWithUserDetails = async (postId) => {
  try {
    const post = await Post.findById(postId).populate('userId', 'name email');
    if(!post){
      throw new CustomError("Post Not found");
    }
    return post;
  } catch (error) {
    console.log(error)
    throw new DatabaseError("Error creating post.");
  }
};