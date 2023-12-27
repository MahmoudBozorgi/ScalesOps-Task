import axios from "axios";

const baseUrl = "https://fakestoreapi.com";
const MyFetch = (method, url) => {
  return axios[method](`${baseUrl}/${url}`)
    .then((res) => res.data)
    .catch((error) => Promise.reject(error));
};

export default MyFetch;
