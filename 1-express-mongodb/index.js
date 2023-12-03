const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

console.log()
console.log(process.env.MONGODB_URI)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, (err) => {
  if (!err) console.log(`server running at port:- http://localhost:${port}`);
})

