const mongoose = require('mongoose')
const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_CONNECTION).then(data => {
        console.log("database connected successfully")
    }).catch(err => console.log("error", err))
}
module.exports = connectDB