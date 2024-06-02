import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "http://15.165.28.164:8080/";

client.defaults.withCredentials = true;

//accessToken 저장
// const token = localStorage.getItem("accessToken");
// client.defaults.headers.common["Authorization"] = token
//   ? `Bearer ${token}`
//   : null;

export default client;
