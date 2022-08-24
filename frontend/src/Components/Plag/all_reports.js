var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://plagiarismsearch.com/api/v3/reports',
    headers: {
        'Authorization': 'Basic Z29uZGFsaXlhbmF5YW42M0BnbWFpbC5jb206anlqa2xlNTJmamp2NnU3YjFlM3A2ZS0xNDYxNTIzNTU='
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });