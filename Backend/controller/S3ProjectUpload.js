const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
require('dotenv')


const s3 = new aws.S3({
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  region: "ap-south-1"
})

const uploadProject = multer({
  storage: multerS3({
    s3: s3,
    bucket: "projectexpo-projects",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, file.originalname)
    },  
  })
})

module.exports = {
  uploadProject
}