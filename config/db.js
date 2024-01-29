const mongoose = require('mongoose')
const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/task').then(data => {
        console.log("database connected")
    }).catch(err => console.log("error", err))
}
module.exports = connectDB