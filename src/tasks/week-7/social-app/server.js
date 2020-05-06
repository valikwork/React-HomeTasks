const express = require('express');
const cors = require('cors');
const { errorHandler, requireAuth } = require('./middleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const fs = require('fs');
const getDb = require('./db');
const PORT = 5000;

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(errorHandler);
app.use(express.static(`${__dirname}/public`))



app.post('/signup', async (req, res) => {
    const newUser = req.body;
    const db = await getDb();
    const user = await db.collection('users').findOne({ email: newUser.email.toLowerCase() })
    if(user) {
        return res.sendHTTPError(400, 'User already exists')
    }

    newUser.email = newUser.email.toLowerCase();
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    await db.collection('users').insertOne(newUser);
    res.send({ message: 'Success' });
})

app.post('/auth', async (req, res) => {
    const { email, password } = req.body;
    const db = await getDb();
    const user = await db.collection('users').findOne({ email: email.toLowerCase() })
    if(!user) {
        return res.sendHTTPError(401, 'User does not exist')
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if(result){
            delete user.password;
            const authToken = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '1h' });
            res.send({ user, authToken });
        } else {
            res.sendHTTPError(401, 'Password is incorrect')
        }
    })
})

app.get('/api/users', requireAuth, async (req, res) => {
    const db = await getDb();
    const result = await db.collection('users').find({}).toArray();
    res.send(result)
})

app.get('/api/me', requireAuth, async (req, res) => {
    const db = await getDb();
    const user = await db.collection('users').findOne({ _id: ObjectId(req.userId) }, { fields: { password: false } })
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
