import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import login from "@/store/modules/login";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    login
  },
});
