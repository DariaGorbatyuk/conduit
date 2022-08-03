<template>
    <mcv-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></mcv-article-form>
</template>

<script setup>
import { computed, reactive } from "vue";
import McvArticleForm from "@/components/ArticleForm"
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router/dist/vue-router";
import {actionTypes} from "@/store/modules/createArticle";

const store = useStore()
const router = useRouter()
const initialValues = reactive({
  title: '',
  description: '',
  body:'',
  tagList: []
});
const validationErrors = computed(()=>store.state.createArticle.validationErrors);
const isSubmitting = computed(()=>store.state.createArticle.isSubmitting);

const onSubmit = (articleInput) => {
  store.dispatch(actionTypes.createArticle, {... articleInput })
  .then((article)=>router.push({name: 'article', params:{slug: article.slug}}))
};
</script>

<style scoped>

</style>
