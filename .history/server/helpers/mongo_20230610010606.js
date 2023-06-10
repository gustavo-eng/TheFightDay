const mongoose = require('mongoose')

module.exports = (req, res, next) => {
    mongoose.connect()
    .then(() => {
        console.log("Database connection established")
    }).catch((err) => {
        console.log("Database connection error")
        console.log('Erro --> ')
        console.log(err)
    })
}