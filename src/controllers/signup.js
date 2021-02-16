import { UserRepository } from '../database/repositories/user-repository'
import { validator } from '../middlewares/body-validation/validator'
import httpMessage from '../utils/http-messages'
import Notify from '../utils/notify'

export async function signUpController (req, res) {
  try {
    const { isError, message } = validator('signup', req.body)
    
    if (isError) return httpMessage.badRequest(message, res)
    
    const { accountAlreadyExists, account } = await UserRepository.create(req.body)
    
    if (accountAlreadyExists) return httpMessage.badRequest('This account already exists', res)

    Notify.log(`Account created ${account}`)
    httpMessage.created(account, res)
  } catch (error) {
    Notify.error('Error while sign up', error)
    httpMessage.internalServerError('An internal server error ocurred, please try again later.', res)
  }
}