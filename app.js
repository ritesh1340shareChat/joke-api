const request = require('request');
const api1 = require ( "./routes/api1" ) ; 

const express = require('express')
const app = express()
const port = 3000

app.get('/', api1) ; 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

