import authApi from "@/api/auth";

export default {
  state: {
    isSubmitting: false
  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true;
    }
  },
  actions: {
    register({ commit }, credentials) {
      new Promise((resolve) => {
        authApi.register(credentials)
          .then((response) => {
          console.log("response", response);
        }).catch((error) => {
          console.log("error", error);
        });
      });
    }
  }
};
