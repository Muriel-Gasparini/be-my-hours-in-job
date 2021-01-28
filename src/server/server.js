import express from 'express'

import env from '../config/envs'
import { setMiddlewares } from './middlewares'
import setNoAuthRoutes from './routes/no-auth'
import { databaseConnect } from '../database/connection'
import Notify from '../utils/notify'

const app = express()

databaseConnect()

setMiddlewares(app)
setNoAuthRoutes(app)


app.listen(env.port, Notify.log(`Server on port: ${env.port}`))