var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();


const createReport = async( fileU )=>{
    console.log("-------building report------------");
    console.log(fileU);
      let fileUrl = "https://projectexpo-projects.s3.ap-south-1.amazonaws.com/" + fileU;
      console.log(fileUrl);
 //   fileUrl = 'https://docs.google.com/document/d/1Ip1LDFtQkUJILIK3KWq3pZYovyMO78-dcU5z08VFv9Q/edit?usp=sharing';
    title = 'Demo';
    data.append('url', fileUrl);
    data.append('title', title);

var config = {
    method: 'post',
    url: 'https://plagiarismsearch.com/api/v3/reports/create',
    headers: {
        'Authorization': 'Basic Z29uZGFsaXlhbmF5YW42M0BnbWFpbC5jb206anlqa2xlNTJmamp2NnU3YjFlM3A2ZS0xNDYxNTIzNTU=',
        ...data.getHeaders()
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data.data.id));
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports = createReport;