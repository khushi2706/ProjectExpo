// Your config file
// const s3Config = require('./s3Config');
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const config = {
  s3BucketName: "projectexpo-project",
  // Absolute path
  localFolder: "C:\\Users\\Lenovo\\Desktop\\SIH\\project\\files",
  accessKeyId: "AKIA45TM7XBP3T4BIBHA",
  secretAccessKey: "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",
  folder_name : "files"
};

// {
//     "accessKeyId": "AKIAS6G5ANL5655DKEHC",
//     "secretAccessKey": "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",
//     "region": "ap-south-1",
//     "bucket": "projectexpo-projects"
// }

exports.folderUpload = async ({accessKeyId, secretAccessKeyId, s3BucketName, localFolder,folder_name}) => {
  AWS.config.setPromisesDependency(Promise);
  const s3 = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: "AKIA45TM7XBP3T4BIBHA",
    secretAccessKey: "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",
  });
  const filesPaths = await walkSync(localFolder);
  const allPaths = [];
  for (let i = 0; i < filesPaths.length; i++) {
    const statistics = `(${i + 1}/${filesPaths.length}, ${Math.round((i + 1) / filesPaths.length * 100)}%)`;
    const filePath = filesPaths[i];
    console.log("filepath: "+filePath); //
    const fileContent = fs.readFileSync(filePath);//read file
    // If the slash is like this "/" s3 will create a new folder, otherwise will not work properly.
    const relativeToBaseFilePath = folder_name+'/'+path.normalize(path.relative(localFolder, filePath));
    console.log("rebs: "+relativeToBaseFilePath);
    var relativeToBaseFilePathForS3 = relativeToBaseFilePath.split(path.sep).join('/');
    console.log("https://projectexpo-project.s3.ap-south-1.amazonaws.com/"+relativeToBaseFilePathForS3);
    // const mimeType = mime.getType(filePath);
    console.log(`Uploading`, statistics, relativeToBaseFilePathForS3);
    console.log("Path : "+relativeToBaseFilePathForS3);
    await s3.putObject({
      ACL: `public-read`,
      Bucket: s3BucketName,
      Key: relativeToBaseFilePathForS3,
      Body: fileContent,
      //ContentType: mimeType,
    }).promise();
    console.log(`Uploaded `, statistics, relativeToBaseFilePathForS3);
    allPaths.push(relativeToBaseFilePathForS3)
  }
  console.log("allpaths: ", allPaths);
  return allPaths;
};

// folderUpload(config).then(() => {
//   console.log(`Completed!`);
// });

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

// module.exports = { folderUpload };