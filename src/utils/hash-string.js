import bcrypt from 'bcryptjs'
import Notify from './notify'

const hashConfig = {
  SALT: 12
}

export class HashString {

  static async hash (string) {
    try {
      return await bcrypt.hash(string, hashConfig.SALT)
    } catch (error) {
      Notify.error('Error while trying hash string', error)
    }
  }

  static async compare (string, hashedString) {
    try {
      return await bcrypt.compare(string, hashedString)
    } catch (error) {
      Notify.error('Error while trying decode string', error)
    }
  }
}