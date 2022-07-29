import axios from "@/api/axios";

const getPopularTags = () => {
  return axios.get("/tags");
};
export default {
  getPopularTags
};
