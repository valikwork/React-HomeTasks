const express = require('express');
require('express-async-errors');
require('./db')
const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comments');
const cors = require('cors');
const { errorHandler, requireAuth } = require('./middleware');
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(errorHandler);
app.use(express.static(`${__dirname}/public`))


app.post('/signup', async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
    } catch (error) {
        if(error.code === 11000) {
            res.sendHTTPError(400, 'User already exists')
        }
        throw error;
    }
    res.send({ newUser: newUser, message: 'Success' });
})

// USER
app.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email}).select('+password');
    const authToken = await user.signIn(password)
    res.send({ authToken, user })
})

app.get('/api/users', requireAuth, async (req, res) => {
    const result = await User.find({})
    res.send(result)
});

app.get('/api/me', requireAuth, async (req, res) => {
    const user = await User.findById(req.userId)
    res.json(user)
});




//POSTS
app.post('/api/posts', requireAuth, async (req, res) => {
    const newPost = new Post(req.body);
    newPost.author = req.userId;
    await newPost.save();
    res.send(newPost);
});
app.get('/api/posts', requireAuth, async (req, res) => {
    const posts = await Post.find({}).populate('author');
    res.send(posts)
});
app.get('/api/posts/:id', requireAuth, async (req, res) => {
    const post = await Post.find({ _id: req.params.id }).populate('author');
    res.send(post)
});
app.put('/api/posts/:id', requireAuth, async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.send(updatedPost)
});
app.delete('/api/posts/:id', requireAuth, async (req, res) => {
    const deletedPost = await Post.deleteOne({ _id: req.params.id }).populate('author');
    res.send(deletedPost)
});




//COMMENTS
app.post('/api/posts/:id/comments', requireAuth, async (req, res) => {
    const comment = new Comment({
        body: req.body.text,
        author: req.userId,
        entityId: req.params.id,
        entityModel: 'Post'
    });
    await comment.save();
    res.send(comment);
});
app.get('/api/posts/:id/comments', requireAuth, async (req, res) => {
    const comments = await Comment.find({ entityId: req.params.id }).populate(['author', 'entityId']);
    res.send(comments)
})
app.get('/api/posts/:id/comments/:comId', requireAuth, async (req, res) => {
    const comment = await Comment.find({ _id: req.params.comId });
    res.send(comment)
})
app.delete('/api/posts/:id/comments/:comId', requireAuth, async (req, res) => {
    const comment = await Comment.find({ _id: req.params.comId });
    if (!comment) {
        return res.sendHTTPError(404, 'Comment not found')
    }
    if (comment.author.toString() !== req.userId) {
        return res.sendHTTPError(403, 'You cannot delete other people\'s  comments')
    }
    await comment.remove();
    res.send({ deleted: true })
})





// ERRORS HANDLE

app.use((req, res, next) => {
    res.status(404).send({ message: '404 Not Found' })
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }
    console.log(`Server is running on ${PORT} port`)
})
