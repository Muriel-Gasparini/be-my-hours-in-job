import { UserRepository } from '../database/repositories/user-repository'
import { validator } from '../middlewares/body-validation/validator'
import { HashString } from '../utils/hash-string'
import { JsonWebToken } from '../utils/jwt'
import Notify from '../utils/notify'
import httpMessage from '../utils/http-messages'

export async function signInController (req, res) {
  try {
    const { login, password } = req.body

    const { isError, message } = validator('signin', req.body)

    if (isError) return httpMessage.badRequest(message, res)

    const { accountNotExists, account } = await UserRepository.findOne({ login })

    if (accountNotExists) return httpMessage.badRequest('This account does not exists', res)

    if (!await HashString.compare(password, account.password)) return httpMessage.badRequest('Invalid Credentials', res)

    httpMessage.successMessage({ id: account.id, token: JsonWebToken.create({ id: account.id }) }, res)
  } catch (error) {
    Notify.error('Error while sign up', error)
    httpMessage.internalServerError('An internal server error ocurred, please try again later.', res)
  }
}