const express = require('express')
const eta = require('eta')
const app = express()
const PORT = 5001

app.engine("eta", eta.renderFile)
eta.configure({ views: "./src/views", cache: false})
app.set("views", "./src/views")
app.set("view cache", true)
app.set("view engine", "eta")

app.get('/', (req, res) => {
  res.render('index', {title: "Inicio"})
})

app.get('/clients', (req, res) => {
  let clients = [
    {
      id: 1,
      name: 'Tancredo',
      lastName: 'Amador',
      number: 91476550,
      email: 'TancredoVillalobosAmador@jourrapide.com'
    },
    {
      id: 2,
      name: 'Farisa',
      lastName: 'Cerda',
      number: 91815992,
      email: 'FarisaCasaresCerda@teleworm.us'
    },
    {
      id: 3,
      name: 'Eustasio',
      lastName: 'Villaseñor',
      number: 95952588,
      email: 'EustasioRoblesVillasenor@teleworm.us'
    }
  ]

  res.render('clients', {title: "Clientes", clients: clients})
})

app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: "MacBook Pro M2 14\" 1TB",
      brand: "Apple",
      price: "9800",
      stock: "2"

    },
    {
      id: 2,
      name: "M720 Triathlon Wireless Mouse",
      brand: "Logitech",
      price: "180",
      stock: "6"

    },
    {
      id: 3,
      name: "MX Keys Wireless Keyboard",
      brand: "Logitech",
      price: "390",
      stock: "3"

    }
  ]

  res.render('products', {title: "Productos", products: products})
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})