"use strict";

var aws = require('aws-sdk');

var multer = require('multer');

var multerS3 = require('multer-s3');

require('dotenv');

var s3 = new aws.S3({
  accessKeyId: "AKIA45TM7XBP3T4BIBHA",
  secretAccessKey: "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",
  region: "ap-south-1"
});
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "projectexpo-profilephoto",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function key(req, file, cb) {
      cb(null, 'University/' + file.originalname);
    }
  })
});
module.exports = {
  upload: upload
};