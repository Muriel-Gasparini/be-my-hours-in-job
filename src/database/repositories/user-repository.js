import Notify from '../../utils/notify'
import User from '../models/user-account'
import { parseMongoDataToObject } from '../../utils/mongo-data-to-object'

export class UserRepository {

  static async create(account) {
    try {
      const userAccount = await User.create(account)
      return parseMongoDataToObject(userAccount)
    } catch (error) {
      Notify.error('Error while creating user account', error)
    }
  }

  static async findOne(query) {
    try {
      const userAccount = await User.findOne(query)
      if (!userAccount) return { accountExists: false }
      return { account: parseMongoDataToObject(userAccount) }
    } catch (error) {
      Notify.error('Error while find one user account', error)
    }
  }
}