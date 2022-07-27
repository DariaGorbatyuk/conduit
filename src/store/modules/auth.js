import authApi from "@/api/auth";
import {setItem, getItem} from "@/helpers/storage";
export const mutationTypes = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSuccess',
  registerFailure: '[auth] registerFailure'
}

export const actionTypes = {
  register: '[auth] register'
}
export default {
  state: {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
  },
  mutations: {
    [mutationTypes.registerStart](state) {
      state.isSubmitting = true;
      state.validationErrors = null
    },
    [mutationTypes.registerSuccess](state, payload) {
      state.isSubmitting = false;
      state.currentUser = payload
      state.isLoggedIn = true
    },
    [mutationTypes.registerFailure](state, payload) {
      state.isSubmitting = false;
      state.validationErrors = payload
    }
  },
  actions: {
    [actionTypes.register]({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        commit(mutationTypes.registerStart)
        authApi.register(credentials)
          .then((response) => {
          commit(mutationTypes.registerSuccess, response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        }).catch((error) => {
          console.log("error", error);
          commit(mutationTypes.registerFailure, error.response.data.errors)
        });
      });
    }
  }
};
