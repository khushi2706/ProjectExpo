const Project = require("../../model/Project");
//const uploadProject = require("../../controller/ProjectUpload/uploadProject");
const {folderUpload} = require("../../controller/ProjectUpload/folderUpload");

const axios = require('axios')


const UpdateProjectLink = async (ProjectId, UpdatedProjectLink) => {
  res.set('Access-Control-Allow-Origin', '*');
  // const {
  //   ProjectId,
  // } = req.body;

  // const UpdatedProjectLink = req.body.UpdatedProjectLink;
  console.log(UpdateProjectLink);
  try {
    const update = {  ProjectLink : UpdatedProjectLink };

   await Project.findByIdAndUpdate(ProjectId,
        update);
      console.log("Done.....");
   
} catch (error) {
  console.log("error: ", error);
    // return res.status(400).json({
    //     success : false,
    //     response : {
    //         error
    //     }
    // })
}
  
  // return res.status(200).json({
  //     success: true,
  //     response: {
  //         code: "Project_link_updated",
  //     },
  // });
};

exports.uploadProject = async (req, res, next) =>
{

  var {
    projectId,
    folderPath
  } = req.body

//do aws stuff here
  const allpaths = await folderUpload({s3BucketName: "projectexpo-projects",
  // Absolute path
  localFolder: folderPath,
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  folder_name : "palgarism"});
  // .then(() => {
  //   console.log(`Completed!`);
  // }).catch(err => {
  //   console.log(err);
  // });

  // console.log("file paths: ", allpaths);
  UpdateProjectLink(projectId, allpaths);


// console.log(folderPath);

//const obj = {  }


// UpdateProjectLink(projectId, filepaths);

// axios.put("http://localhost:5000/api/Project/updateProjectLink",{
//     ProjectId : projectId,
//     UpdatedProjectLink: JSON.parse(JSON.stringify(obj))
//   })

  return res.status(200).json({
    success: true,
    response: {
        code: "Project_uploaded_updated",
    },
});
}

// module.exports = { uploadProject }