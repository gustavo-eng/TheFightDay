const Joi = require('joi')
const  joi = require('joi')

const taskSchema = Joi.object({

    email: Joi.string()
    .email()
    .required(),


    password: Joi.string()
    .min(6)
    .max(25)
    .required(),




}).with("user", "password")



module.exports = {
    validateFields: function(req, res, next) {
        const {error, value } = taskSchema.validate(req.body)

        if (error) {
            console.log('Erro ao validar campos')
            console.log(error.details[0].message)
            return res.status(400).json({status: false, msg: "Valores invalidos para os campos email e password"})
        }

        console.log('Campos de login invalidos')
        req.body = value
        return next()
    }

}