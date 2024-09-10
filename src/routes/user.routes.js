const express = require("express");
const  userController = require("../controllers/user.controller");
const { validateTokenMiddleware } = require("../middleware/authorization.middleware");

const router = express.Router();

router.post("/register", async (req, res, next) => {
    userController.register(req,res,next)
});
router.post("/login", async (req, res, next) => {
    userController.login(req,res,next)
});

//CRUD - users

router.get("/users", async (req, res, next) => {
    console.log(
        "update users route . pm2 check"
    )
    userController.getAllUsers(req,res,next)
});
router.get("/user",validateTokenMiddleware, async (req, res, next) => {
    userController.getUser(req,res,next)
});
router.get("/user/:email", async (req, res, next) => {
    userController.getUserByEmail(req,res,next)
});
router.patch("/user/:email", async (req, res, next) => {
    userController.updateUserByEmail(req,res,next)
});
router.delete("/user/:email", async (req, res, next) => {
    userController.deleteUserByEmail(req,res,next)
});

module.exports = router;
