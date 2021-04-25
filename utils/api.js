import axios from "axios";

export default axios.create({
  baseURL: "https://ormoptimizer-api-dev.serverdatahost.com/api"
  // baseURL: "http://192.168.43.156:9641/api"
});
