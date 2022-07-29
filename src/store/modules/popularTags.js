import tagsApi from "@/api/popularTags";

const state = {
  isLoading: false,
  errors: null,
  data: null
};
export const mutationTypes = {
  getPopularTagsStart: "[tags] getPopularTagsStart",
  getPopularTagsSuccess: "[tags] getPopularTagsSuccess",
  getPopularTagsFailure: "[tags] getPopularTagsFailure"
};
export const actionTypes = {
  getPopularTags: "[tags] getPopularTags"
};
const mutations = {
  [mutationTypes.getPopularTagsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getPopularTagsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPopularTagsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  }
};
const actions = {
  [actionTypes.getPopularTags]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationTypes.getPopularTagsStart);
      tagsApi.getPopularTags()
        .then((response) => {
          commit(mutationTypes.getPopularTagsSuccess, response.data.tags);
          resolve(response.data.tags);
        })
        .catch((e) => {
        commit(mutationTypes.getPopularTagsFailure, e);
      });
    });
  }
};
export default {
  state,
  mutations,
  actions
};
