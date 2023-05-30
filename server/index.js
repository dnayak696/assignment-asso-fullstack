const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors())
app.use(bodyParser.json())

const Port = 8000;


app.use("/", require("./routes/movies"))


app.listen(Port,function() {
    console.log("Connected to port " + Port)
})


