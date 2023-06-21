//const {name, dataPayment, dataCompetition, price} = req.body

const Joi = require('joi')

const taskSchemaComp = Joi.object({
    name: Joi.string().min(3).max(20).required(),

    dataPayment: Joi.string().min(3).max(30).required(),

    dataCompetition: Joi.string().min(3).max(30).required(),

    price: Joi.string().min(3).max(25).required()

})

module.exports = {
    valideteFieldsCompetition: function(req, res, next) {
        const {error, value} = taskSchemaComp.validate(req.body)

        if(error) {
            return res.status(400).json({status: false, msg: "Valores inválidos "})
        }else {
            req.body = value
            next()
        }
    }
}
