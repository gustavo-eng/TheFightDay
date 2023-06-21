const Joi = require('joi')

const taskSchema = Joi.object({

    user: Joi.string()
    .min(3)
    .max(15)
    .required(),


    password: Joi.string()
    .min(3)
    .max(25)
    .required(),


}).with("user", "password")



module.exports = {
    validateFields: function(req, res, next) {
        const {error, value } = taskSchema.validate(req.body)
''
        if (error) {
            console.log('Erro ao validar campos')
            console.log(error.details[0].message)
            return res.status(400).json({status: false, msg: `Erro -- ${error.details[0].message}`})
        }

        console.log('Campos de login invalidos')
        // req.body = value
        return next()

    }

}


