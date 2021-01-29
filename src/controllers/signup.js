import { UserRepository } from '../database/repositories/user-repository'
import { validator } from '../middlewares/body-validation/validator'
import Notify from '../utils/notify'

export async function signUpController (req, res) {
  try {
    const { isError, message } = validator('signup', req.body)

    if (isError) return res.status(400).json(message)

    const userAccount = await UserRepository.create(req.body)
    
    res.status(201).json(userAccount)
  } catch (error) {
    Notify.error('Error while sign up', error)
  }
}