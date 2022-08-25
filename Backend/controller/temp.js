

const axios = require('axios')
const fun = async(req,res) =>{
   const pRate = 9
    const setPlagRes = await axios.put(`http://localhost:5000/api/Project/setPlga`,
    {
      projectId : "63011c0c7dcdb0712b2b9ead",
      PlagRate : pRate
    }
    ).catch((err)=>console.log(err));
    console.log(setPlagRes);
}

fun();