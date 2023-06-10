const mongoose = require('mongoose')

module.exports = (req, res, next) => {
    mongoose.connect("mongodb://127.0.0.1:27017/judo")
    .then(() => {
        console.log("Database connection established")
    }).catch((err) => {
        console.log("Database connection error")
        console.log('Erro --> ')
        console.log(err)
    })
    return next()
}