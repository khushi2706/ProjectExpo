var axios = require('axios');
var FormData = require('form-data');

const [Id, setId] = useState();
const sendReq = async () => {
    const res = await axios
        .get("http://localhost:5000/api/project/getPlga/63011c0c7dcdb0712b2b9ead")
        .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
}

const SetId = () => {
    sendReq().then((data) => {
        setId(data.Id);
    });
};
SetId()

var config = {
    method: 'get',
    url: 'https://plagiarismsearch.com/api/v3/reports/' + Id,
    headers: {
        'Authorization': 'Basic Z29uZGFsaXlhbmF5YW42M0BnbWFpbC5jb206anlqa2xlNTJmamp2NnU3YjFlM3A2ZS0xNDYxNTIzNTU='
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data.data.link));
    })
    .catch(function (error) {
        console.log(error);
    });