const Project = require("../../model/Project");

const axios = require('axios')


const UploadProject = async (req, res, next) =>
{

  const {
    projectId,
    folderPath
  } = req.body

// do the aws stuff
console.log(folderPath);
//make object
const obj = {
    key: "this is link",
    key2: "seccond link"
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