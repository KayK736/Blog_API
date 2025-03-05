const express = require("express");
const { createPost, getPosts, getPostById, updatePost, deletePost } = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;

