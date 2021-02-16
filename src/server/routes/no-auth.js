import { Router } from "express";

import { signUpController } from '../../controllers/signup'
import { signInController } from "../../controllers/signIn";

const router = Router()

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)

export default app => { app.use('/', router)}
