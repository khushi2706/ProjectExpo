const express = require('express')
const uploadRoute = express()
const { upload } = require('./S3UploadClient')


uploadRoute.post('/', upload.single('inputFile'), (req, res) => {
   console.log("uploading");
    if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })
    console.log(res);
    res.status(201).json({
      message: 'Successfully uploaded ' + req.files.length + ' files!',
      files: req.files
    })
  })

module.exports = uploadRoute
