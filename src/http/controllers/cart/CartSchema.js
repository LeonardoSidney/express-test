import Joi from "joi"

const cartSchema = {
  createCartSchema: Joi.object({
    sessionId: Joi.string().required()
  })
}

class ValidateCart {
  createValidation (request, response, next) {
    const { body } = request
    const { error, value } = cartSchema.createCartSchema.validate(body)

    if (error){
      throw Error("Payload is not valid : >>> ", value)
    }

    next()
  }
}

export default ValidateCart