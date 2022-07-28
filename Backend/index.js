const express = require("express");
require("./config/db");


//import all rounter
const roadmapRoute = require("./routes/roadmap-routes");
const projectRoute = require("./routes/projectRoute");

console.log(projectRoute);
//create the app
const app = express();


app.set("view engine","ejs");
app.use(express.json());


app.get('/',(req,res)=>{
    res.send({key:"hello bvmites!"})
})

app.use('/api/project', projectRoute);
app.use('/api/roadmap' , roadmapRoute);
//define port

app.listen(5000, () => console.log("app started at 5000..."));