const express = require('express') 
const routes = require('./views/endPoints')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: ["http://localhost:5173"],
    methods:["GET","POST"]
}))
app.use('/',routes)

app.listen(port,()=>{
    console.log(`App listening on http://localhost:${port}`)
})