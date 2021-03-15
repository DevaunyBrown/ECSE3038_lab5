//Loap app server
const express = require ('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('combined'))

//POST
app.post('/tank', (req, res) => {
  console.log("posting...")
  //console.log("Description:"+ req.body.Descript)
  const Description =  req.body.Descript
  const Longitutde =  req.body.long
  const Latitude =  req.body.lat
  const Percentage_full =  req.body.Per

  res.end()
})
app.get("/",(req, res) => {
  console.log("responding to get")
  res.send("Hello from Dev")
})

//localhost:3003
app.listen(3003, () =>{
  console.log("server is up and running")
})

app.get("/profile", (req, res) =>{
  var profile1 = {Tank_description: "watahouse",  Percentage_full:"100%"}
  res.json(profile1)
 // res.send("Profile request")
})


















/*function getDishes() {
    return fetch("http://localhost:5000/dish")
      .then((response) => response.json())
      .then((json) => json);
  }
app.post('/tank_update', (req, res) => {
    console.log("Updating Tank")
    res.end()
}*/
