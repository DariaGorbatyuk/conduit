import articleApi from "@/api/article";

const state = {
    isLoading: false,
    errors: null,
    data: null
};
export const mutationTypes = {
    getArticleStart: "[article] getArticleStart",
    getArticleSuccess: "[article] getArticleSuccess",
    getArticleFailure: "[article] getArticleFailure"
};
export const actionTypes = {
    getArticle: "[article] getArticle"
};
const mutations = {
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true;
        state.data = null;
        state.error = null;
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    [mutationTypes.getArticleFailure](state, payload) {
        state.isLoading = false;
        state.error = payload;
    }
};
const actions = {
    [actionTypes.getArticle]({ commit }, {slug}) {
        return new Promise((resolve) => {
            commit(mutationTypes.getArticleStart);
            articleApi.getArticle(slug)
                .then((article) => {
                    commit(mutationTypes.getArticleSuccess, article);
                    resolve(article);
                })
                .catch((e) => {
                    commit(mutationTypes.getArticleFailure, e);
                });
        });
    }
};
export default {
    state,
    mutations,
    actions
};
