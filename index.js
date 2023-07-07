const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//Rute to files of the archive routers
const tasksRouters = require('./routers/tasks');
const usersRouters = require('./routers/users');

const port = 3010
const app = express()


//middlewares
app.use(express.json())
app.use('/api/tasks', tasksRouters)
app.use('/api/users', usersRouters)

app.get('/', (req, res) => {
    res.send('Holaa!! ')
})

//Connection with MondoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conected to DB'))
    .catch((error) => console.log(error))

app.listen(port, () => {
    console.log('Listening on port ' + port)
})