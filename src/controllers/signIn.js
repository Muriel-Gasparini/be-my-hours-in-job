import { UserRepository } from '../database/repositories/user-repository'
import { validator } from '../middlewares/body-validation/validator'
import { HashString } from '../utils/hash-string'
import { JsonWebToken } from '../utils/jwt'
import Notify from '../utils/notify'

export async function signInController (req, res) {
  try {
    const { login, password } = req.body

    const { isError, message } = validator('signin', req.body)

    if (isError) return res.status(400).json(message)

    let { accountExists, account } = await UserRepository.findOne({ login })

    account = JSON.stringify(account)
    account = JSON.parse(account)
Notify.log(account)
    if (!accountExists) return res.status(400).json({ error: 'This account does not exists' })

    if (!HashString.compare(password, account.password)) return res.status(400).json({ error: 'Invalid Credentials' })
    
    res.status(200).json({ id: account.id, token: JsonWebToken.create({ id: account.id }) })
  } catch (error) {
    Notify.error('Error while sign up', error)
  }
}