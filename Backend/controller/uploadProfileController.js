const express = require('express')
const uploadRoute = express()
const { upload } = require('./S3UploadClient')


uploadRoute.post('/', upload.single('inputFile'), (req, res) => {
   console.log("uploading");
    
    res.status(201).json({
      message: 'Successfully uploaded  files!',
      files: req.files
    })
  })

module.exports = uploadRoute
