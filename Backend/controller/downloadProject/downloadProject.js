const Project = require("../../model/Project");
//const uploadProject = require("../../controller/ProjectUpload/uploadProject");
//const { projectDownload } = require("../../controller/downloadProject/folderDownload");
const { zipper } = require("../../controller/downloadProject/zipper");


//make api for project download
const DownloadProjectLink = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    // const {
    //   ProjectId,
    // } = req.body;

    //const DownloadProjectLink = req.body.DownloadProjectLink
    console.log(DownloadProjectLink);
    try {
      const update = {  DownloadProjectLink : DownloadProjectLink };

      await Project.findByIdAndUpdate(ProjectId,

          update);

    } catch (error) {

        return res.status(400).json({
            success : false,
            response : {
                error
            }
        })
    }

}



exports.projectDownload = async (req, res, next) =>
{

  var {
    projectId,
    folderPath
  } = req.body

  //do aws stuff here
    const download = await zipper({
      s3FolderName: uniqname(projectId),
     startKey: '' // could keep null
    , zipFileName: "C:/Downloads/" +uniqname(projectId) + '.zip'
    , recursive: true
    })

//do aws stuff here
    
  // .then(() => {
  //   console.log(`Completed!`);
  // }).catch(err => {
  //   console.log(err);
  // });

  // console.log("file paths: ", allpaths);
  DownloadProjectLink(projectId, download);

  //save all paths to database  
  
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
        code: "Project_downloaded",
    },
});
}

