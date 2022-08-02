<template>
  <div>CreateArticle
    <mcv-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></mcv-article-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import McvArticleForm from "@/components/ArticleForm"
const initialValues = reactive({
  title: '',
  description: '',
  body:'',
  tagList: []
});
const validationErrors = null;
const isSubmitting = false;

const onSubmit = (data) => {
  console.log('submit create', data)
};
</script>

<style scoped>

</style>
