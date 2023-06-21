//const { email, user, nameCompetition, categoryWeight, categoryYear, picture } = req.body

const Joi = require('joi')

const taskSchemaPayment = Joi.object({
    email: Joi.string().min(8).max(50)
})