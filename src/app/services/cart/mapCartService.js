export default function execute (body) {
  console.log('mapCartService:: execute :: body :>> ', body)
  return {
    sessionId: body.sessionId
  }
}