const express = require('express')
const app = express()
const { upload } = require('./S3UploadClient')


app.post('/collegeprofile', upload.array('inputFile', 1), (req, res) => {
    if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })
  
    res.status(201).json({
      message: 'Successfully uploaded ' + req.files.length + ' files!',
      files: req.files
    })
  })

module.exports = app
