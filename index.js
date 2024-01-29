const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const router = require('./routes/taskRoutes')
connectDB()
app.use(express.json())
app.use('/taskapp', router)
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my application</h1>")
})
app.use((err, req, res, next) => {
    if (err) {
        return res.status(200).send({ message: "application crashed somewhere", success: false })
    }
})
app.listen(process.env.PORT, () => {
    console.log(`server started at port no ${process.env.PORT}`)
})