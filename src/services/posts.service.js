const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const socketIo = require("socket.io");
const {
  CustomError,
  DatabaseError,
  NotFoundError,
  ValidationError,
} = require("../utils/errors/error");
const { default: mongoose } = require("mongoose");
const Post = require("../model/post.model");
const { io, server } = require("../../server");

const SECRET_KEY = process.env.SECRET_KEY;
exports.createPost = async (postData) => {
  try {
    const newPost = new Post(postData);
    await newPost.save();

    return newPost;
  } catch (error) {
    console.log(error);
    if (
      error instanceof NotFoundError ||
      error instanceof ValidationError ||
      error instanceof CustomError
    ) {
      throw error;
    } else {
      throw new DatabaseError("Error creating post.");
    }
  }
};
exports.getAllPosts= async () => {
  try {
    const post = await Post.find().populate("userId", "name email");
    if (!post) {
      throw new CustomError("Post Not found");
    }
    return post;
  } catch (error) {
    console.log(error);
    if (
      error instanceof NotFoundError ||
      error instanceof ValidationError ||
      error instanceof CustomError
    ) {
      throw error;
    } else {
      throw new DatabaseError("Error creating post.");
    }
  }
};
exports.getPostWithUserDetails = async (postId) => {
  try {
    const post = await Post.findById(postId).populate("userId", "name email");
    if (!post) {
      throw new CustomError("Post Not found");
    }
    return post;
  } catch (error) {
    console.log(error);
    if (
      error instanceof NotFoundError ||
      error instanceof ValidationError ||
      error instanceof CustomError
    ) {
      throw error;
    } else {
      throw new DatabaseError("Error creating post.");
    }
  }
};
exports.updatePostWithUserDetails = async (postId, updateData) => {
  try {
    const post = await Post.findByIdAndUpdate(postId, updateData, {
      new: true,
    });
    return post;
  } catch (error) {
    console.log(error);
    if (
      error instanceof NotFoundError ||
      error instanceof ValidationError ||
      error instanceof CustomError
    ) {
      throw error;
    } else {
      throw new DatabaseError("Error update post.");
    }
  }
};
exports.deletePostWithUserDetails = async (postId) => {
  try {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      throw new NotFoundError("No Post existing ");
    }
    return {
      message: `post with id ${post?._id} deleted successfully !`,
    };
  } catch (error) {
    console.log(error);
    if (
      error instanceof NotFoundError ||
      error instanceof ValidationError ||
      error instanceof CustomError
    ) {
      throw error;
    } else {
      throw new DatabaseError("Error deleting post.");
    }
  }
};
