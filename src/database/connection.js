import mongoose from 'mongoose'
import envs from '../config/envs'
import Notify from '../utils/notify'


export async function databaseConnect () {
  try {
    await mongoose.connect(envs.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    return Notify.log('MongoDB successfully connected')
  } catch (error) {
    Notify.error(error)
  }
}
