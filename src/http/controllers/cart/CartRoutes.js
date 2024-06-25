import { Router } from "express";
import ValidateCart from "./CartSchema.js";
import CartController from "./CartController.js"

const router = Router()
const cartControlller = new CartController()
const cartSchema = new ValidateCart()

router.post('/cart', cartSchema.createValidation, cartControlller.addCartController)

export default router