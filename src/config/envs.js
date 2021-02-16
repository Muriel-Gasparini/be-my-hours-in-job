import { config } from 'dotenv'

config()

const env = {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET
}

export default env