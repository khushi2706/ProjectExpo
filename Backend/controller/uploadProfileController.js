const express = require('express')
const uploadRoute = express()
const { upload,uploadProject } = require('./S3UploadClient')


uploadRoute.post('/', upload.array('inputFile',100), (req, res) => {
  if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })  
  console.log("uploading");
    
    res.status(201).json({
      message: 'Successfully uploaded ' + req.files.length + ' files!',
      files: req.files
    })
  })

  // uploadRoute.post('/', uploadProject.array('inputFile',100), (req, res) => {
  //   if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })  
  //   console.log("uploading");
      
  //     res.status(201).json({
  //       message: 'Successfully uploaded ' + req.files.length + ' files!',
  //       files: req.files
  //     })
  //   })

module.exports = uploadRoute
