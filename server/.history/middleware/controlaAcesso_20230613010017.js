const jwt = require('jsonwebtoken')

module.exports = {
    accessControl: async (req, res, next) => {
        const token = req.header('Custom-Header');
        jwt.verify(token, 'A1B2C3', (err, decoded) => {
            if(!err) {
                req.usuario = decoded.user
                req.id = decoded.userId
            } else {

            }
        })
    }
}