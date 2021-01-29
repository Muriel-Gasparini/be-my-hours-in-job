import mongoose from 'mongoose'
import { HashString } from '../../utils/hash-string'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
})

userSchema.pre('save', function () {
  this.password = HashString.hash(this.password)
})

export default mongoose.model('User', userSchema)
