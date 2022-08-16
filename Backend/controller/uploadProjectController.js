const express = require('express')
const uploadProjectRoute = express()
const { uploadProject } = require('./S3ProjectUpload')


  uploadProjectRoute.post('/', uploadProject.array("inputpath",50), (req, res) => {
    if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })  
    console.log("uploading");
      
      res.status(201).json({
        message: 'Successfully uploaded ' + req.files.length + ' files!',
        files: req.files
      })
    })

module.exports = uploadProjectRoute
