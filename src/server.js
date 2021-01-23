import Express from 'express'

import env from './config/envs'

const App = Express()

App.listen(env.port, console.log(`Server on port: ${env.port}`))