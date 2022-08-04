<template>
  <div class="settings-page" v-if="currentUser">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Settings</h1>
          <mcv-validation-errors
            :validation-errors="validationErrors"
            v-if="validationErrors"></mcv-validation-errors>
          <form action="" @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg"
                       v-model="form.image"
                       placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg"
                       v-model="form.username"
                       placeholder="URL of profile username">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg"
                          v-model="form.bio"
                          placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg"
                       v-model="form.email"
                       placeholder="URL of profile email">
              </fieldset>
              <fieldset class="form-group">
                <input type="password" class="form-control form-control-lg"
                       v-model="form.password"
                       placeholder="Password">
              </fieldset>
              <button type="submit" class="btn btn-lg btn-primary pull-xs-right"
                      :disabled="isSubmitting">UpdateSettings
              </button>
            </fieldset>

          </form>
          <hr>
          <button type="button" class="btn btn-outline-danger" @click="logout">Or click here to logout</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { actionTypes as authActionTypes, getterTypes } from "@/store/modules/auth";
import McvValidationErrors from "@/components/ValidationErrors";
import { useRouter } from "vue-router/dist/vue-router";

const store = useStore();
const router = useRouter();
const isSubmitting = computed(() => store.state.settings.isSubmitting);
const validationErrors = computed(() => store.state.settings.validationErrors);
const currentUser = computed(() => store.getters[getterTypes.currentUser]);
const form = computed(() => {
  if (currentUser) {
    return {
      username: currentUser.value.username,
      image: currentUser.value.image,
      email: currentUser.value.email,
      bio: currentUser.value.bio,
      password: ""
    };
  } else {
    return {
      username: "",
      bio: "",
      image: "",
      email: "",
      password: ""
    };
  }
});
const onSubmit = () => {
  store.dispatch(authActionTypes.updateCurrentUser, { currentUserInput: form.value })
  .then(() => router.push({ name: "globalFeed" }))
};
const logout = () => {
  store.dispatch(authActionTypes.logout)
    .then(() => router.push({ name: "globalFeed" }));
};
</script>

<style scoped>

</style>
