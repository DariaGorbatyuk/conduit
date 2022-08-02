import articleApi from "@/api/article";

const state = {
  isSubmitting: false,
  validationErrors: null
};
export const mutationTypes = {
  createArticleStart: "[create article] createArticleStart",
  createArticleSuccess: "[create article] createArticleSuccess",
  createArticleFailure: "[create article] createArticleFailure"
};

export const actionTypes = {
  createArticle: "[create article] createArticle"
};
const mutations = {
  [mutationTypes.createArticleStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [mutationTypes.createArticleSuccess](state) {
    state.isSubmitting = false;
  },
  [mutationTypes.createArticleFailure](state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  }
};
const actions = {
  [actionTypes.createArticle]({commit},  inputs ) {
    return new Promise((resolve) => {
      commit(mutationTypes.createArticleStart)
      articleApi.createArticle(inputs)
        .then((article)=>{
          commit(mutationTypes.createArticleSuccess)
          resolve(article)
        }).catch((result)=>{
          commit(mutationTypes.createArticleFailure, result.response.data.errors)
      })
    });
  }
};

export default {
  state,
  mutations,
  actions
}
