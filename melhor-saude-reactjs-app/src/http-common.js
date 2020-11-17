import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "http://melhorsaude-env.eba-xwk43qff.us-east-2.elasticbeanstalk.com",
  headers: {
    "Content-type": "application/json"
  }
});