"use strict";

var S3Zipper = require('aws-s3-zipper'); //make a function to download the project from s3 bucket as a projectId and uploaded folder date


function uniqname(pro_id) {
  return pro_id;
}

var config = {
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  region: "ap-south-1",
  bucket: "projectexpo-projects"
};
var zipper = new S3Zipper(config);
zipper.zipToFile({
  s3FolderName: uniqname(projectId),
  startKey: '' // could keep null
  ,
  zipFileName: uniqname(projectId) + '.zip',
  recursive: true
}, function (err, result) {
  if (err) console.error(err);else {
    var lastFile = result.zippedFiles[result.zippedFiles.length - 1];
    if (lastFile) console.log('last key ', lastFile.Key); // next time start from here
  }
});
module.exports = {
  zipper: zipper
};