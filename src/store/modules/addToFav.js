import addToFavApi from "@/api/addToFav";

export const mutationTypes = {
  addToFavStart: "[addToFav] addToFavStart",
  addToFavSuccess: "[addToFav] addToFavSuccess",
  addToFavFailure: "[addToFav] addToFavFailure"
};
export const actionTypes = {
  addToFav: "[addToFav] addToFav"
};


const mutations = {
  [mutationTypes.addToFavStart]() {
  },
  [mutationTypes.addToFavSuccess]() {
  },
  [mutationTypes.addToFavFailure]() {
  }
};
const actions = {
  [actionTypes.addToFav]({ commit }, { slug, isFavorited }) {
    return new Promise((resolve) => {
      commit(mutationTypes.addToFavStart);
      const promise = isFavorited
        ? addToFavApi.removeFromFav(slug)
        : addToFavApi.addToFav(slug);
      promise.then(article => {
        commit(mutationTypes.addToFavSuccess, article)
        resolve(article)
      }).catch(() => {
        commit(mutationTypes.addToFavFailure)
      })
    });
  }
};

export default {
  mutations,
  actions
}
