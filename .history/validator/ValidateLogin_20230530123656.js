const Joi = require('joi')
const  joi = require('joi')

const taskSchema = Joi.object({

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



}).with("user", "password")
