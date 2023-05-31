const Joi = require('joi')
const  joi = require('joi')

const taskSchema = Joi.object({
    password: Joi.string()
    .min(4)
    .max(50)
    .required(),

    email: Joi.string()
    .email()
    .required(),


    name: Joi.string()
    .min(3)
    .max(25)
    .required(),




}).with("password", "email")



module.exports = {
    validateEmail: function(req, res, next) {
        const {error, value } = taskSchema.validate(req.body.email)

        if (error) {
            console.log('Ocorreu um erro no campo de email')
            console.log(error.details[0].message)
            return res.status(400).json({status: false, msg: "Valores invalidos para email"})
        }

        console.log('Campo email validado com sucesso ')
        req.body.email = value
        return next()
    },

    validateName: function(req, res, next) {
        const {error, value } = taskSchema.validate(req.body.name)

        if(error) {
            return res.json({status:false, msg: "Nome incorreto"})
        }
    }


}




