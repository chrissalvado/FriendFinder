const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
var bodyParser = require('body-parser') 
app.use( bodyParser.json() );       // to support JSON-encoded bodies 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies 
      extended: true })); 

var htmlRouts = require("./routing/htmlroutes.js")
var DataRouts = require("./routing/apiRoutes.js")
app.use(DataRouts)
app.use(htmlRouts)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))