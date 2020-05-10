const express = require('express');
require('express-async-errors');
require('./db')
const User = require('./models/user');
const cors = require('cors');
const { errorHandler, requireAuth } = require('./middleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const fs = require('fs');
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

app.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email}).select('+password');
    const authToken = await user.signIn(password)
    res.send({ authToken, user })
})

app.get('/api/users', requireAuth, async (req, res) => {
    const result = await User.find({})
    res.send(result)
})

app.get('/api/me', requireAuth, async (req, res) => {
    const user = await User.findById(req.userId)
    res.json(user)
})

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
