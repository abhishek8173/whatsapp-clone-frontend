import axios from "axios";

const instance = axios.create({
  baseURL: "https://whtsappcloneback-end.onrender.com",
});

export default instance;
