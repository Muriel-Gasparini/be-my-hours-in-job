import { config } from 'dotenv'

config()

const env = {
  port: process.env.PORT || 3000 
}

export default env