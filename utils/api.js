import axios from "axios";

export default axios.create({
  baseURL: "https://ormoptimizerstag-api-dev.serverdatahost.com/api"
  // baseURL: "http://192.168.1.85:9646/api"
});
