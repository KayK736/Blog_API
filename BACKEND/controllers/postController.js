const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create({ ...req.body, author: req.user.userId });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getPosts = async (req, res) => {
    const posts = await Post.find().populate("author", "name email");
    res.json(posts);
};

exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate("author", "name email");
    res.json(post);
};

exports.updatePost = async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
};
