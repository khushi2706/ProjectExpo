const spawn = require("child_process").spawn;

var absolutePath = __dirname ;
console.log(absolutePath.replaceAll('\\','/',));
absolutePath = absolutePath.replaceAll('\\','/') + `/Recommendation.py`;


const pythoneProcess = spawn('python', [absolutePath]);

const getRecommenedProject =  async (req, res, next) =>{

    await pythoneProcess.stdout.on('data', (data) => {
        str = data.toString();
        console.log(str);
        
        projectId = JSON.parse(str);  

        return res.status(200).json({
            projectId
        })
    });
}

module.exports = {getRecommenedProject}


