import axios from "@/api/axios";

const addToFav = (slug) => {
return axios.post(`articles/${slug}/favorite`)
  .then(response=>response.data.article)
};
const removeFromFav = (slug) => {
return axios.delete(`articles/${slug}/favorite`)
  .then(response=>response.data.article)
};

export default {
  addToFav,
  removeFromFav
}
