import { Router } from "express"
import cartRoutes from './controllers/cart/CartRoutes.js'

const router = Router()

router.use(cartRoutes)

export default router