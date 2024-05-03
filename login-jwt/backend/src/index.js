const express = require('express') 
const routes = require('./views/endPoints')

const app = express()
const port = 3000

app.use('/',routes)

app.listen(port,()=>{
    console.log(`App listening on http://localhost:${port}`)
})