import authApi from "@/api/auth";
import { setItem, getItem } from "@/helpers/storage";

export const mutationTypes = {
  registerStart: "[auth] registerStart",
  registerSuccess: "[auth] registerSuccess",
  registerFailure: "[auth] registerFailure",
  loginStart: "[auth] loginStart",
  loginSuccess: "[auth] loginSuccess",
  loginFailure: "[auth] loginFailure"
};

export const actionTypes = {
  register: "[auth] register",
  login: "[auth] login"
};
export const getterTypes = {
  currentUser: "[auth] currentUser",
  isLoggedIn: "[auth] isLoggedIn",
  isAnonymous: "[auth] isAnonymous"
};
export default {
  state: {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
  },
  getters: {
    [getterTypes.currentUser]: (state) => state.currentUser,
    [getterTypes.isLoggedIn]: state => Boolean(state.isLoggedIn),
    [getterTypes.isAnonymous]: state => state.isLoggedIn === false

  },
  mutations: {
    [mutationTypes.registerStart](state) {
      state.isSubmitting = true;
      state.validationErrors = null;
    },
    [mutationTypes.registerSuccess](state, payload) {
      state.isSubmitting = false;
      state.currentUser = payload;
      state.isLoggedIn = true;
    },
    [mutationTypes.registerFailure](state, payload) {
      state.isSubmitting = false;
      state.validationErrors = payload;
    },
    [mutationTypes.loginStart](state) {
      state.isSubmitting = true;
      state.validationErrors = null;
    },
    [mutationTypes.loginSuccess](state, payload) {
      state.isSubmitting = false;
      state.currentUser = payload;
      state.isLoggedIn = true;
    },
    [mutationTypes.loginFailure](state, payload) {
      state.isSubmitting = false;
      state.validationErrors = payload;
    }
  },
  actions: {
    [actionTypes.register]({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        commit(mutationTypes.registerStart);
        authApi.register(credentials)
          .then((response) => {
            commit(mutationTypes.registerSuccess, response.data.user);
            setItem("accessToken", response.data.user.token);
            resolve(response.data.user);
          }).catch((error) => {
          console.log("error", error);
          commit(mutationTypes.registerFailure, error.response.data.errors);
        });
      });
    },
    [actionTypes.login]({ commit }, payload) {
      return new Promise((resolve) => {
        commit(mutationTypes.loginStart);
        authApi.login(payload).then((response) => {
            commit(mutationTypes.loginSuccess, response.data.user);
            setItem("accessToken", response.data.user.token);
            resolve(response.data.user);
          }
        ).catch((error) => {
          commit(mutationTypes.loginFailure, error.response.data.errors);
        });
      });
    }
  }
};
