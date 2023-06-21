const Joi = require('joi')


//const {email, user, password, permission} = req.body
const taskSchema = Joi.object({
    email: Joi.string()
    .min(6)
    .max(40)
    .required(),

    user: Joi.string()
    .min(3)
    .max(20)
    .required(),

    password: Joi.string()
    .min(3)
    .max(15)
    .required(),

    permission: Joi.string()
    .min(3)
    .max(12)
    .required()

})


module.exports = {
    validateFieldsUser: function(req, res, next) {
        const {error, value} = taskSchema.validate(req.body)


    }
}

