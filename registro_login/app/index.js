import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import { methods as authetication } from './controllers/autheticationController.js'
import { methods as authorization } from './middlewares/authorization.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Server
const app = express()
app.set("port",4000)
app.listen(app.get("port"))
console.log(`Servidor corriendo en puerto http://localhost:${app.get("port")}`)

// Configuracion
app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(cookieParser())

app.get("/",authorization.soloPublico,(req,res) =>{res.sendFile(__dirname + "/pages/login.html")})
app.get("/register",authorization.soloPublico,(req,res) =>{res.sendFile(__dirname + "/pages/register.html")})
app.get("/admin",authorization.soloAdmin,(req,res) =>{res.sendFile(__dirname + "/pages/admin.html")})
app.post("/api/login", authetication.login)
app.post("/api/register", authetication.register)
