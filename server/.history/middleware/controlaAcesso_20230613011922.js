const jwt = require('jsonwebtoken')

module.exports = {
    accessControl: async (req, res, next) => {
        const token = req.header('Custom-Header');
        // aplicar .env
        jwt.verify(token, 'A1B2C3', (err, decoded) => {
            if(!err) {
                req.usuario = decoded.user
                console.log('req.usurio')
                console.log(req.usuario)
                req.id = decoded.userId
                req.userPermission = decoded.userPermission
                console.log('req.id')
                console.log(req.id)
                return next()
            } else {
                res.status(403).json({status:false, msg:'Sem permissão'});
            }
        })
    }
}