import jwt from 'jsonwebtoken'
import envs from '../config/envs'

export class JsonWebToken {
  
  static create (payload) {
    return jwt.sign(payload, envs.jwtSecret, { expiresIn: '24h' })
  }
}
