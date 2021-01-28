import { Router } from "express";

import { signUpController } from '../../controllers/signup'

const router = Router()

router.post('/sign-up', signUpController)

export default app => { app.use('/', router)}
