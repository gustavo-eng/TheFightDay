const Joi = require('joi')
const  joi = require('joi')

const taskSchema = Joi.object({
    password: Joi.string()
    .min(4)
    .max(50)
    .required(),

    email: Joi.string()
    .email()
    .required()

}).with("password", "email")



module.exports = {
    validateEmail: function(req, res, next) {
        const {error, value } = taskSchema.validate(req.body)
    }

}