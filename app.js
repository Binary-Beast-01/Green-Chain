require('dotenv').config()
const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser())

//Routers
const AuthenticationRoute = require('./routes/authRoutes.js')

const PORT = process.env.PORT || 8888
app.listen(PORT, () => { console.log('Server Check.................OK !!\nhttp://localhost:8888') });

// Routering operations
app.use('/auth', AuthenticationRoute)

app.get('/',(req,res)=>{
  res.render("index")
})
