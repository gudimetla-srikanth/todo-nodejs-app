const express = require('express')
const app = express()
const connectDB = require('./config/db')
const router = require('./routes/taskRoutes')
connectDB()
app.use(express.json())
app.use('/taskapp', router)
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my application</h1>")
})
app.listen(8000, () => {
    console.log("server started")
})