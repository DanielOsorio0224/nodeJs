import express from 'express'
import routes from './views/endPoints.js'

const app = express()
const port = 3000

app.use('/',routes)

app.listen(port,()=>{
    console.log(`App listening on http://localhost:${port}`)
})