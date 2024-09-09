const express = require("express");
const  postController = require("../controllers/posts.controller");
const { validateTokenMiddleware } = require("../middleware/authorization.middleware");

const router = express.Router();


//CRUD - post

router.post("/post",validateTokenMiddleware, async (req, res, next) => {
    postController.createPost(req,res,next)
});
router.get("/posts",validateTokenMiddleware, async (req, res, next) => {
    postController.getAllPosts(req,res,next)
});
router.get("/post/:id",validateTokenMiddleware, async (req, res, next) => {
    postController.getPostByIdWithUserDetails(req,res,next)
});
router.patch("/post/:id",validateTokenMiddleware, async (req, res, next) => {
    postController.updateByIdWithUserDetails(req,res,next)
});
router.delete("/post/:id",validateTokenMiddleware, async (req, res, next) => {
    postController.deleteByIdWithUserDetails(req,res,next)
});


module.exports = router;
