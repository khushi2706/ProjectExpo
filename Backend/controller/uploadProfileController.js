const express = require('express')
const uploadRoute = express()
const { upload } = require('./S3UploadClient')


uploadRoute.post('/', upload.array('inputFile',3), (req, res) => {
  if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })  
  console.log("uploading");
    
    res.status(201).json({
      message: 'Successfully uploaded ' + req.files.length + ' files!',
      files: req.files
    })
  })

module.exports = uploadRoute
