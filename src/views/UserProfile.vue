<template>
  <div class="profile-page" v-if="userProfile">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img class="user-img" :src="userProfile.image" alt="">
            <h4>{{ userProfile.username }}</h4>
            <p>{{ userProfile.bio }}</p>
            <div>
              FOLLOW USER BTN
              <router-link to="" v-if="isCurrentUserProfile"
                           class="btn btn-sm btn-outline-secondary action-btn"
                           :to="{name: 'settings'}"
              >Edit profile settings
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="article-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link class="nav-link"
                             :to="{name: 'userProfile', params: {slug: userProfile.username}}">
                  My post
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link"
                             :to="{name: 'userProfileFavorites', params: {slug: userProfile.username}}">
                  Favorites posts
                </router-link>
              </li>
            </ul>
          </div>
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, watch } from "vue";
import { actionTypes } from "@/store/modules/userProfile";
import { useRoute } from "vue-router/dist/vue-router";
import { getterTypes } from "@/store/modules/auth";
import McvFeed from "@/components/Feed";

const store = useStore();
const route = useRoute();
const isLoading = computed(() => store.state.userProfile.isLoading);
const errors = computed(() => store.state.userProfile.errors);
const userProfile = computed(() => store.state.userProfile.data);
const currentUser = computed(() => store.getters[getterTypes.currentUser]);
const isCurrentUserProfile = computed(() => {
  if (!currentUser || !userProfile) return false;
  return currentUser.value.username === userProfile.value.username;
});
const apiUrl = computed(() => {
  const isFavorites = route.path.includes("favorites");
  return isFavorites ? `/articles/?favorited=${userProfileSlug.value}` : `/articles?author=${userProfileSlug.value}`;
});
const userProfileSlug = computed(() => route.params.slug);
const getUserProfile = ()=>{
  store.dispatch(actionTypes.getUserProfile, { slug: userProfileSlug.value })

}
watch(userProfileSlug, ()=>{
  getUserProfile()
})

onMounted(() => {
  getUserProfile()
});
</script>

<style scoped>

</style>
