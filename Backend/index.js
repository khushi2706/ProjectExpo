const express = require("express");
require("./config/db");


//import all rounter
const roadmapRoute = require("./routes/roadmap-routes");

console.log(roadmapRoute);
//create the app
const app = express();


app.set("view engine","ejs");
app.use(express.json());


app.get('/',(req,res)=>{
    res.send({key:"hello bvmites!"})
})

app.use('/api/roadmap' , roadmapRoute);

//define port

app.listen(5000, () => console.log("app started at 5000..."));