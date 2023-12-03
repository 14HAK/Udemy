const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, (err) => {
  if (!err) console.log(`server running at port:- http://localhost:${port}`);
})

