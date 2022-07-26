import authApi from "@/api/auth";

export default {
  state: {
    isSubmitting: false
  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true;
    },
    registerSuccess(state) {
      state.isSubmitting = false;
    },
    registerFailure(state) {
      state.isSubmitting = false;
    }
  },
  actions: {
    register({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        commit('registerStart')
        authApi.register(credentials)
          .then((response) => {
          console.log("response", response);
          commit('registerSuccess', response.data.user)
          resolve(response.data.user)
        }).catch((error) => {
          console.log("error", error);
          commit('registerFailure', error.response.data.errors)
        });
      });
    }
  }
};
