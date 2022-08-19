const Project = require("../../model/Project");
//const uploadProject = require("../../controller/ProjectUpload/uploadProject");

const axios = require('axios')

const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const config = {
  s3BucketName: "projectexpo-projects",
  // Absolute path
  folderPath: "C:\\Users\\Lenovo\\Desktop\\SIH'2022\\aws\\aws",
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  folder_name : "aws"
};



const UploadProject = async (req, res, next) =>
{

  const {
    projectId,
    folderPath
  } = req.body

  AWS.config.setPromisesDependency(Promise);
  const s3 = new AWS.S3({
  signatureVersion: 'v4',
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  });

  async function walkSync(dir) {
    const files = fs.readdirSync(dir);
    const output = [];
    for (const file of files) {
      const pathToFile = path.join(dir, file);
      const isDirectory = fs.statSync(pathToFile).isDirectory();
      if (isDirectory) {
        output.push(...await walkSync(pathToFile));
      } else {
        output.push(await pathToFile);
      }
    }
    console.log(output);
    return output;
  }

  const filesPaths = await walkSync(folderPath);
  for (let i = 0; i < filesPaths.length; i++) {
    const statistics = `(${i + 1}/${filesPaths.length}, ${Math.round((i + 1) / filesPaths.length * 100)}%)`;
    const filePath = filesPaths[i];
    console.log("filepath: "+filePath);
    const fileContent = fs.readFileSync(filePath);
    // If the slash is like this "/" s3 will create a new folder, otherwise will not work properly.
    const relativeToBaseFilePath = folderPath+'/'+path.normalize(path.relative(folderPath, filePath));
    console.log("rebs: "+relativeToBaseFilePath);
    const relativeToBaseFilePathForS3 = relativeToBaseFilePath.split(path.sep).join('/');
    console.log("https://projectexpo-projects.s3.ap-south-1.amazonaws.com/"+relativeToBaseFilePathForS3);
    const mimeType = mime.getType(filePath);
    console.log(`Uploading`, statistics, relativeToBaseFilePathForS3);
    console.log("Path : "+relativeToBaseFilePathForS3);
    await s3.putObject({
      ACL: `public-read`,
      Bucket: config.s3BucketName,
      Key: relativeToBaseFilePathForS3,
      Body: fileContent,
      ContentType: mimeType
    }).promise();
  }
  console.log("Uploaded all files");

  start(config).then(() => {
    console.log(`Completed!`);
  });




console.log(folderPath);

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