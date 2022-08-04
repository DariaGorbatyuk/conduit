import userProfileApi from "@/api/userProfile";

const state = {
  isLoading: false,
  errors: null,
  data: null
};
export const mutationTypes = {
  getUserProfileStart: "[userProfile] getUserProfileStart",
  getUserProfileSuccess: "[userProfile] getUserProfileSuccess",
  getUserProfileFailure: "[userProfile] getUserProfileFailure"
};
export const actionTypes = {
  getUserProfile: "[userProfile] getUserProfile"
};
const mutations = {
  [mutationTypes.getUserProfileStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getUserProfileSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getUserProfileFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  }
};
const actions = {
  [actionTypes.getUserProfile]({ commit }, {slug}) {
    return new Promise((resolve) => {
      commit(mutationTypes.getUserProfileStart);
      userProfileApi.getUserProfile(slug)
        .then((user) => {
          commit(mutationTypes.getUserProfileSuccess, user);
          resolve(user);
        })
        .catch(() => {
          commit(mutationTypes.getUserProfileFailure);
        });
    });
  }
};
export default {
  state,
  mutations,
  actions
};
