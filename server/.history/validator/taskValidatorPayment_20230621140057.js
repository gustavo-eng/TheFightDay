//const { email, user, nameCompetition, categoryWeight, categoryYear, picture } = req.body

const Joi = require('joi')

const taskSchemaPayment = Joi.object({
    email: Joi.string().min(8).max(50).required(),

    user: Joi.string().min(3).max(35).required(),


    nameCompetition: Joi.string().min(3).max(30),

    categoryWeight: Joi.string().min(2).max(12).required(),

})

module.exports = {
    validateFieldsPayment: function(req, res, next) {
        const {error, value} = taskSchemaPayment.validate(req.body)
        if(error){
            return res.status(400).json({status: false, msg: `Erro -- ${error.details[0].message}`})
        }else {
            next()
        }
    }
}