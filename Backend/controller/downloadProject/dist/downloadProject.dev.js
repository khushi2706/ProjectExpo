"use strict";

var S3Zipper = require('aws-s3-zipper');

var config = {
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  region: "ap-south-1",
  bucket: "projectexpo-projects"
};
var zipper = new S3Zipper(config);
zipper.zipToFile({
  s3FolderName: 'hello',
  startKey: '' // could keep null
  ,
  zipFileName: './myLocalFile.zip',
  recursive: true
}, function (err, result) {
  if (err) console.error(err);else {
    var lastFile = result.zippedFiles[result.zippedFiles.length - 1];
    if (lastFile) console.log('last key ', lastFile.Key); // next time start from here
  }
});