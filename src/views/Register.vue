<template>
  <div class="auth-page">
    <div class="container-page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link to="{name: 'login}">Have an account?</router-link>
          </p>
          VALIDATION ERRORS
          <form action="" @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Username">
            </fieldset>
            <fieldset class="form-group">
              <input type="email" class="form-control form-control-lg" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password">
            </fieldset>
            <button type="submit" class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isSubmitting = computed(() => {
  return store.state.auth.isSubmitting;
});

function onSubmit() {
  console.log("submitting");
  store.dispatch("register", {email: 'sdfdsfdsfg@fgh.com', username: 'qwsdfdfdfgdfgdfgerty', password: '123456'})
    .then(user=>{
    console.log('user', user)
  })
}
</script>

<style scoped>

</style>
