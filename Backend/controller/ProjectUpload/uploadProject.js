const Project = require("../../model/Project");

const axios = require('axios')


const UploadProject = async (req, res, next) =>
{
// do the aws stuff

//make object
const obj = {
    key: "this is link"
}

axios.put("http://localhost:5000/api/Project/updateProjectLink",{
    ProjectId : "62f9d780f752d70e0e2a2e5d",
    UpdatedProjectLink: JSON.parse(JSON.stringify(obj))
  })

  return res.status(200).json({
    success: true,
    response: {
        code: "Project_link_updated",
    },
});
}

module.exports = { UploadProject }