<template>
  <div>
    <mcv-loading v-if="isLoading"></mcv-loading>
    <mcv-article-form
      v-if="initialValues"
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></mcv-article-form>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import McvArticleForm from "@/components/ArticleForm";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router/dist/vue-router";
import { actionTypes } from "@/store/modules/editArticle";
import McvLoading from "@/components/Loading";

const store = useStore();
const router = useRouter();
const route = useRoute();
const validationErrors = computed(() => store.state.editArticle.validationErrors);
const isSubmitting = computed(() => store.state.editArticle.isSubmitting);
const isLoading = computed(() => store.state.editArticle.isLoading);
const article = computed(() => store.state.editArticle.article);
const initialValues = computed(() => {
  if (!article.value) return null;
  else {
    return {
      title: article.value.title,
      description: article.value.description,
      body: article.value.body,
      tagList: article.value.tagList
    };
  }
});

onMounted(() => {
  store.dispatch(actionTypes.getArticle, { slug: route.params.slug });
});
const onSubmit = (articleInput) => {
  const slug = route.params.slug;
  console.log("articleInput vue", articleInput);
  store.dispatch(actionTypes.updateArticle, { slug, articleInput })
    .then((article) => router.push({ name: "article", params: { slug: article.slug } }));
};
</script>

<style scoped>

</style>
