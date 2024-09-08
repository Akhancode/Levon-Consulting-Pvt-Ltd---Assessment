const express = require("express");
const  postController = require("../controllers/posts.controller");
const { validateTokenMiddleware } = require("../middleware/authorization.middleware");

const router = express.Router();


//CRUD - post

router.post("/post",validateTokenMiddleware, async (req, res, next) => {
    postController.createPost(req,res,next)
});
router.get("/post/:id",validateTokenMiddleware, async (req, res, next) => {
    postController.getPostByIdWithUserDetails(req,res,next)
});


module.exports = router;
