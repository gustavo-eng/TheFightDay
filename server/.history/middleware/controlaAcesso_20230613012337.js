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
                console.log('req.id')
                console.log(req.id)
                req.userPermission = decoded.userPermission
                console.log('req.permission --> ')
                console.log(req.userPermission)
                if(req.userPermission.includes('sensei')) { // se nao inclui, nao tem acesso
                    console.log('Simmm inclui sensei no permission')
                } else {
                    console.log('Nao, nao inclue sensei no permission')
                }
                return next()
            } else {
                res.status(403).json({status:false, msg:'Sem permissão'});
            }
        })
    }
}