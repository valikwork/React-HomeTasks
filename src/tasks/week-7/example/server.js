const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = 5000;
const app = express();


const errorHandler = (req, res, next) => {
    res.sendHTTPError = (status, message) => {
        res.status(status)
        throw new Error(message)
    }
    next()
}



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(errorHandler)

app.get('/', (req, res) =>{
    res.send('Hello');
});

app.get('/echo', (req, res)=>{
    const query = req.query;
    res.send(query);
})

app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./users.json'));
    res.json(users);
})

app.post('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./users.json'));
    const newUser = req.body
    users.push(newUser)
    fs.writeFileSync('./users.json', JSON.stringify(users), 'utf-8')
    res.send({ message: "User has been added" })
})




app.use((req, res) => {
    res.status(404).send({message: 'Request not found'});
})
app.use((err, req, res, next) => {
    res.send({ message: err.message })
})


app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }
    console.log(`Server is running on ${PORT} port`)
})
