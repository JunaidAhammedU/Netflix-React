import axios from "axios"; 
import { baseURL } from "./Constants/Constans";

const instance = axios.create({
    baseURL: baseURL
  });

  export default instance;