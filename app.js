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

const PORT = process.env.PORT || 8888
app.listen(PORT, () => { console.log('Server Check.................OK !!\nhttp://localhost:8888') });

app.get('/',(req,res)=>{
  res.render("index")
})
