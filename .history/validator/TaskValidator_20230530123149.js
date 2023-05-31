const Joi = require('joi')
const  joi = require('joi')

const taskSchema = Joi.object({
    // password: Joi.string()
    // .min(4)
    // .max(50)
    // .required(),

    email: Joi.string()
    .email()
    .required(),


    name: Joi.string()
    .min(3)
    .max(25)
    .required(),

    subject: Joi.string()
    .min(5)
    .max(25)
    .required(),


    message: joi.string()
    .min(5)
    .required()



}).with("password", "email", "message")



module.exports = {
    validateFields: function(req, res, next) {
        const {error, value } = taskSchema.validate(req.body)

        if (error) {
            console.log('Ocorreu um erro no campo de email')
            console.log(error.details[0].message)
            return res.status(400).json({status: false, msg: "Valores invalidos para email"})
        }

        console.log('Campo email validado com sucesso ')
        req.body = value
        return next()
    }

}




