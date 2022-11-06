
const express = require('express')  //use to import the express module
const connectToMongo = require("./db.js")
const app = express()
const port = 5000;
// var cors = require('cors')
// app.use(cors())

connectToMongo(); //ot returns promise as it si a asynchronous function


// to use the req.body we had to use a middleware
app.use(express.json()) // middle ware now we  can use req.bosy to send req inthe form of json
app.get('/api/user', (req, res) => {
  res.send('Hello zaid!')
})
app.use("/api/user"  , require("./routes/main")) //created a router imported frmo main.js whenevr use hot the /api/user then this will generatedd

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)}
  
  )