<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link :to="{name:'userProfile',
          params: {slug: article.author.username}}">
            <img :src="article.author.image" alt="">
          </router-link>
          <div class="info">
            <router-link :to="{name:'userProfile',
          params: {slug: article.author.username}}">
              {{article.author.username}}
            </router-link>
            <span class="date">{{article.createdAt}}</span>
          </div>
          <span>
            <router-link class="btn btn-outline-secondary btn-sm"
                         :to="{name: 'editArticle',
                         params: {slug: article.slug}}">
              <i class="ion-edit">Edit article</i>
            </router-link>
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a">
                Delete article
              </i>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <mcv-loading v-if="isLoading"></mcv-loading>
      <mcv-error-message v-if="errors"></mcv-error-message>
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{article.body}}</p>
          </div>
          TAGLIST
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {actionTypes} from "@/store/modules/articles";
import {useStore} from "vuex";
import {useRoute} from "vue-router/dist/vue-router";
import McvLoading from "@/components/Loading";
import McvErrorMessage from "@/components/ErrorMessage";
const store = useStore()
const route = useRoute()

const isLoading = computed(() => store.state.article.isLoading)
const article = computed(() => store.state.article.data)
const errors = computed(() => store.state.article.errors)
onMounted(() => {
  console.log(store)
  store.dispatch(actionTypes.getArticle, {slug: route.params.slug})
})
</script>

<style scoped>

</style>
