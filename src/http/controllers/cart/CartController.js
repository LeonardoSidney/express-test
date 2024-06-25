import CartOperation from "../../../app/operations/Cart/CartOperation.js"

class CartController {
  addCartController (request, response) {
    const { body } = request

    const cartOperation = new CartOperation()

    const cart = cartOperation.create(body)

    return response.send(cart)
  }
}

export default CartController