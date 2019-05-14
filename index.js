const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const {
  exec
} = require('child_process');
require("dotenv").config()

const PORT = process.env.PORT || 7004

const app = express()


app.use(cors({
  origin: true
}))
app.use(bodyParser.json())
app.use(express.json())
app.use((req, res) => {
  exec('cat index.js', (error, stdout, stderr) => {
    if (error) {
      return
    }
    console.log(`stdout: ${stdout}`)
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})