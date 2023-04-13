const express = require('express')
const eta = require('eta')
const app = express()
const PORT = 9000

app.engine("eta", eta.renderFile)
eta.configure({ views: "./src/views", cache: true })
app.set("views", "./src/views")
app.set("view cache", true)
app.set("view engine", "eta")

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})