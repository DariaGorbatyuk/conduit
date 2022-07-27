<template>
  <div class="auth-page">
    <div class="container-page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link to="{name: 'login}">Have an account?</router-link>
          </p>
          <mcv-validation-errors v-if="validationErrors" :validation-errors="validationErrors"></mcv-validation-errors>
          <form action="" @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input v-model.trim="user.name" type="text" class="form-control form-control-lg" placeholder="Username">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" type="email" class="form-control form-control-lg" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" type="password" class="form-control form-control-lg"
                     placeholder="Password">
            </fieldset>
            <button type="submit" class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router/dist/vue-router";
import McvValidationErrors from "@/components/ValidationErrors"
import {actionTypes} from "@/store/modules/auth";

const store = useStore();
const router = useRouter()
const user = reactive({
  name: '',
  email: '',
  password: ''
});

const isSubmitting = computed(() => store.state.auth.isSubmitting);
const validationErrors = computed(()=>store.state.auth.validationErrors)
function onSubmit() {
  store.dispatch(actionTypes.register,
    {
      email: user.email,
      username: user.name,
      password: user.password
    })
    .then(() => {
     router.push({name: 'home'})
    });
}
</script>

<style scoped>

</style>
