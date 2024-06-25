import express from 'express'
import router from './http/router.js'

const app = express()
const port = 3000
app.use(express.json()) // o problema estava aqui, sem o middleware ele não aceita requisições do jeito que costumamos mandar

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const catalog = [
  {
    _id: 'pf0ZoB1FwH6',
    product: 'Floratta',
    price: 6000
  },
  {
    _id: 'pmSjGCTfn8w',
    product: 'Malbec',
    price: 21000
  },
  {
    _id: 'pht4Xx5nHMB',
    product: 'Her Code',
    price: 15000
  },
]