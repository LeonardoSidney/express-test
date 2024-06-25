import mapCartService from "../../services/cart/mapCartService.js"
import createCartService from '../../services/cart/createCartService.js'

class CartOperation {
  create (body) {
    const mapCart = mapCartService(body)
    const newCart = createCartService(mapCart)

    return newCart
  }
}

export default CartOperation