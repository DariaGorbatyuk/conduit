import articleApi from "@/api/article";

const state = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null
};
export const mutationTypes = {
  updateArticleStart: "[updateArticle] updateArticleStart",
  updateArticleSuccess: "[updateArticle] updateArticleSuccess",
  updateArticleFailure: "[updateArticle] updateArticleFailure",

  getArticleStart: "[updateArticle] getArticleStart",
  getArticleSuccess: "[updateArticle] getArticleSuccess",
  getArticleFailure: "[updateArticle] getArticleFailure"
};

export const actionTypes = {
  updateArticle: "[updateArticle] updateArticle",
  getArticle: "[updateArticle] getArticle"
};
const mutations = {
  [mutationTypes.updateArticleStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [mutationTypes.updateArticleSuccess](state) {
    state.isSubmitting = false;
  },
  [mutationTypes.updateArticleFailure](state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
  [mutationTypes.getArticleStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getArticleFailure](state) {
    state.isSubmitting = false;
  }
};
const actions = {
  [actionTypes.updateArticle]({commit},  {slug, articleInputs} ) {
    return new Promise((resolve) => {
      commit(mutationTypes.updateArticleStart)
      articleApi.editArticle(slug, articleInputs)
        .then((article)=>{
          commit(mutationTypes.updateArticleSuccess, article)
          resolve(article)
        }).catch((result)=>{
        commit(mutationTypes.updateArticleFailure, result.response.data.errors)
      })
    });
  },
  [actionTypes.getArticle]({commit},  {slug} ) {
    return new Promise((resolve) => {
      commit(mutationTypes.getArticleStart)
      articleApi.getArticle(slug)
        .then((article)=>{
          commit(mutationTypes.updateArticleSuccess, article)
          resolve(article)
        }).catch(()=>{
        commit(mutationTypes.updateArticleFailure)
      })
    });
  }
};

export default {
  state,
  mutations,
  actions
}
