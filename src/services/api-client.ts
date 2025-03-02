import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ad3ee84d5e54798ac7ffba8f522eda1",
  },
});
