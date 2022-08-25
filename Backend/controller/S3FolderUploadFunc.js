// Your config file
// const s3Config = require('./s3Config');
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const config = {
  s3BucketName: "projectexpo-project",
  // Absolute path
  localFolder: "C:\\Users\\Bhumit\\Desktop\\node-aws-s3-fileupload-master\\hello",
  accessKeyId: "AKIA45TM7XBP3T4BIBHA",
  secretAccessKey: "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",
};

// {
//     "accessKeyId": "AKIAS6G5ANL5655DKEHC",
//     "secretAccessKey": "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",
//     "region": "ap-south-1",
//     "bucket": "projectexpo-projects"
// }

const start = async ({accessKeyId, secretAccessKeyId, s3BucketName, localFolder}) => {
  AWS.config.setPromisesDependency(Promise);
  const s3 = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: "AKIA45TM7XBP3T4BIBHA",
    secretAccessKey: "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",
  });
  const filesPaths = await walkSync(localFolder);
  for (let i = 0; i < filesPaths.length; i++) {
    const statistics = `(${i + 1}/${filesPaths.length}, ${Math.round((i + 1) / filesPaths.length * 100)}%)`;
    const filePath = filesPaths[i];
    const fileContent = fs.readFileSync(filePath);
    // If the slash is like this "/" s3 will create a new folder, otherwise will not work properly.
    const relativeToBaseFilePath = path.normalize(path.relative(localFolder, filePath));
    const relativeToBaseFilePathForS3 = "hello/"+relativeToBaseFilePath.split(path.sep).join('/');
    const mimeType = mime.getType(filePath);
    console.log(`Uploading`, statistics, relativeToBaseFilePathForS3);
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
  return output;
}