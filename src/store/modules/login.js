import authApi from "@/api/auth";
import { setItem, getItem } from "@/helpers/storage";

export const mutationTypes = {
  loginStart: "[login] loginStart",
  loginSuccess: "[login] loginSuccess",
  loginFailure: "[login] loginFailure"
};
export const actionTypes = {
  login: "[login] login"
};
const state = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};
const mutations = {
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
};
const actions = {
  [actionTypes.login]({ commit }, payload) {
    return new Promise((resolve) => {
      commit(mutationTypes.loginStart);
      authApi.login(payload).then((response) => {
          commit(mutationTypes.loginSuccess, response.data.user)
          setItem("accessToken", response.data.user.token);
          resolve(response.data.user);
        }
      ).catch((error) => {
        commit(mutationTypes.loginFailure, error.response.data.errors);
      });
    });
  }
};
export default {
  state,
  mutations,
  actions
};
