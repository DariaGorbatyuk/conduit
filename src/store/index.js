import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import feed from "@/store/modules/feed"
import article from "@/store/modules/articles"
import popularTags from "@/store/modules/popularTags"
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    article,
    popularTags
  },
});
