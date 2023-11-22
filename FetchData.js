const { default: axios } = require("axios")

const fetchData = async () => {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/276872");
        const data = response.data;
        return data;
    }catch(error){
        console.log(error);
    }
}

module.exports = fetchData;