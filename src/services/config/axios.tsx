import axios from "axios";

 const BASE_URL ='https://api.slingacademy.com/v1/sample-data/users'


const instance = axios.create({
    baseURL: BASE_URL,
  });
  
  export default instance;