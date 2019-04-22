const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
var bodyParser = require('body-parser') 
app.use( bodyParser.json() );       // to support JSON-encoded bodies 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies 
      extended: true })); 

var htmlRoutes = require("./routing/htmlroutes.js")
var DataRoutes = require("./routing/apiRoutes.js")
app.use(DataRoutes)
app.use(htmlRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))