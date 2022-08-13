const spawn = require("child_process").spawn;

const pythoneProcess = spawn('python3', ["Recommendation.py"]);

pythoneProcess.stdout.on('data', (data) => {
    str = data.toString();

    myjson = JSON.parse(str);
    console.log(myjson);
});