import Helmet from 'helmet'
import express from 'express'
import Cors from 'cors'

export const setMiddlewares = (app) => {
  app.use(express.json())
  app.use(Helmet())
  app.use(Cors())
}
