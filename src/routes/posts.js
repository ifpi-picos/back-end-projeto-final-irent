const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer')
const Post = require('../models/post');

const router = express.Router();

router.post('/', multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, key } = req.file;

    const post = await Post.create({
        name,
        size,
        key,
        url: '',
    });

    return res.json({ post });
});

module.exports = router;