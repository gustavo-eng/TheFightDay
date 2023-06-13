const jwt = require('jsonwebtoken')
module.exports = {
    accessControl: async (req, res, next) => {
        const token = req.header('Custom-Header');


    }
}