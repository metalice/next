import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const fetcher = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch(({ message }) => console.log(message));
