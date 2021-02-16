import Notify from '../../utils/notify'
import User from '../models/user-account'
import { parseMongoDataToObject } from '../../utils/mongo-data-to-object'
import { HashString } from '../../utils/hash-string'

export class UserRepository {

  static async create(account) {
    try {
      const { accountNotExists } = await this.findOne({ login: account.login })
      
      if (!accountNotExists) return { accountAlreadyExists: true }
      
      account.password = await HashString.hash(account.password)

      const userAccount = await User.create(account)

      return { account: parseMongoDataToObject(userAccount) }
    } catch (error) {
      throw error
    }
  }

  static async findOne(query) {
    try {
      const userAccount = await User.findOne(query)

      if (!userAccount) return { accountNotExists: true }

      return { account: parseMongoDataToObject(userAccount) }
    } catch (error) {
      throw error
    }
  }
}