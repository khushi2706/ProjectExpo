const spawn = require("child_process").spawn;

const pythoneProcess = spawn('python', ["D:/ProjectExpo/Backend/recommendation/Recommendation.py"]);

var myjson;
pythoneProcess.stdout.on('data', (data) => {
    str = data.toString();
    console.log(str);
    myjson = str;
    myjson = JSON.parse(str);
    
console.log(myjson[0]);
});

