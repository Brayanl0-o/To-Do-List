const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
//call the variable of the environment
require('dotenv').config()

//Rute to files of the archive routers
const tasksRouters = require('./routers/tasks');
const usersRouters = require('./routers/users');

const port = 3010
const app = express();


//middlewares
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json())
app.use('/api/tasks', tasksRouters)
app.use('/api/users', usersRouters)

app.get('/', (req, res) => {
    res.send('Holaa!! Estas conenctado a la API To-Do List ')
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