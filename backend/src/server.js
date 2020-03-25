const express = require('express')
const cors = require('cors')

const app = express()

const router = require('./routes')

app.use(cors(
//    {
//        origin: "meuapp.com"
//    }
))

app.use(express.json())

app.use(router)

const port = 3333
app.listen(port, _ => {
    console.log("SHH!, tô ouvindo a porta " + port)
})