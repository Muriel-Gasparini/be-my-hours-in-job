import Joi from 'joi'

export default Joi.object({
  name: Joi.string().min(3).required(),
  login: Joi.string().min(4).required(),
  password: Joi.string().min(5).required(),
  confirmPassword: Joi.string().min(5).required()
})