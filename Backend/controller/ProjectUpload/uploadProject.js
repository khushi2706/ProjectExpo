const Project = require("../../model/Project");
//const uploadProject = require("../../controller/ProjectUpload/uploadProject");
//const folderupload = require("../../controller/ProjectUpload/folderupload");

const axios = require('axios')



const UploadProject = async (req, res, next) =>
{

  var {
    projectId,
    folderPath
  } = req.body

//do aws stuff here


console.log(folderPath);

const obj = { 
  key:"new",
  key2: "new"
}




axios.put("http://localhost:5000/api/Project/updateProjectLink",{
    ProjectId : projectId,
    UpdatedProjectLink: JSON.parse(JSON.stringify(obj))
  })

  return res.status(200).json({
    success: true,
    response: {
        code: "Project_uploaded_updated",
    },
});
}

module.exports = { UploadProject }