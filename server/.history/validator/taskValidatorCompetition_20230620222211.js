//const {name, dataPayment, dataCompetition, price} = req.body

const Joi = require('joi')

const taskSchemaComp = Joi.object({
    name: Joi.string().min(3).max(20).required(),

    dataPayment: Joi.string().min(3).max(30).required(),

})
