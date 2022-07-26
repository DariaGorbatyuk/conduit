import authApi from "@/api/auth";
import {setItem, getItem} from "@/helpers/storage";

export default {
  state: {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true;
      state.validationErrors = null
    },
    registerSuccess(state, payload) {
      state.isSubmitting = false;
      state.currentUser = payload
      state.isLoggedIn = true
    },
    registerFailure(state, payload) {
      state.isSubmitting = false;
      state.validationErrors = payload
    }
  },
  actions: {
    register({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        commit('registerStart')
        authApi.register(credentials)
          .then((response) => {
          commit('registerSuccess', response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        }).catch((error) => {
          console.log("error", error);
          commit('registerFailure', error.response.data.errors)
        });
      });
    }
  }
};
