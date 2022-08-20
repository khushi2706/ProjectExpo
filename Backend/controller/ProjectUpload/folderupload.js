// Your config file
// const s3Config = require('./s3Config');
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const config = {
  s3BucketName: "projectexpo-projects",
  // Absolute path
  folderPath: "C:\\Users\\Lenovo\\Desktop\\SIH'2022\\aws",
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  folder_name : "aws"
};

// {
//     "accessKeyId": "AKIAS6G5ANL5655DKEHC",
//     "secretAccessKey": "NmCBDtYzZDKcjH+FRu1kHf0qs8oP5eaQSnIuN3b",
//     "region": "ap-south-1",
//     "bucket": "projectexpo-projects"
// }

const start = async ({accessKeyId, secretAccessKeyId, s3BucketName, folderPath,folder_name}) => {
  AWS.config.setPromisesDependency(Promise);
  const s3 = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: "AKIAS6G5ANL5655DKEHC",
    secretAccessKey: "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",
  });
  const filesPaths = await walkSync(folderPath);
  for (let i = 0; i < filesPaths.length; i++) {
    const statistics = `(${i + 1}/${filesPaths.length}, ${Math.round((i + 1) / filesPaths.length * 100)}%)`;
    const filePath = filesPaths[i];
    console.log("filepath: "+filePath);
    const fileContent = fs.readFileSync(filePath);
    //If the slash is like this "/" s3 will create a new folder, otherwise will not work properly.
    const relativeToBaseFilePath = folder_name+'/'+path.normalize(path.relative(localFolder, filePath));
    console.log("rebs: "+relativeToBaseFilePath);
    const relativeToBaseFilePathForS3 = relativeToBaseFilePath.split(path.sep).join('/');
    console.log("https://projectexpo-projects.s3.ap-south-1.amazonaws.com/"+relativeToBaseFilePathForS3);
    const mimeType = mime.getType(filePath);
    console.log(`Uploading`, statistics, relativeToBaseFilePathForS3);
    console.log("Path : "+relativeToBaseFilePathForS3);
    await s3.putObject({
      ACL: `public-read`,
      Bucket: s3BucketName,
      Key: relativeToBaseFilePathForS3,
      Body: fileContent,
      ContentType: mimeType,
    }).promise();
    console.log(`Uploaded `, statistics, relativeToBaseFilePathForS3);
  }
};

start(config).then(() => {
  console.log(`Completed!`);
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




