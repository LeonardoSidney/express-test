export default function execute (cardBody) {
  console.log('createCartService:: execute :: cardBody :>> ', cardBody)
  const cart = {
    _id: "cdsvfg246T5",
    sessionId: cardBody.sessionId,
    items: [],
    total: 0
  }

  return cart
}