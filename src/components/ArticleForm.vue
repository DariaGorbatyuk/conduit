<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <mcv-validation-errors v-if="errors" :validation-errors="errors"></mcv-validation-errors>
          <form action="" @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input type="text"
                       class="form-control form-control-lg"
                       placeholder="Article title" v-model="formValues.title">
              </fieldset>
              <fieldset class="form-group">
                <input type="text"
                       class="form-control form-control-lg"
                       placeholder="Article description" v-model="formValues.description">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg"
                          placeholder="What is this article about"
                          v-model="formValues.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text"
                       class="form-control form-control-lg"
                       placeholder="Enter tags" v-model="formValues.tagList">
              </fieldset>
              <fieldset class="form-group">
                <button type="submit" class="btn btn-lg pull-xs-right btn-primary"
                :disabled="isSubmitting"
                >Publish article</button>
              </fieldset>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import McvValidationErrors from "@/components/ValidationErrors";

const emit = defineEmits(["articleSubmit"]);
const props = defineProps({
  initialValues: {
    type: Object,
    required: true
  },
  errors: {
    type: Object,
    required: false
  },
  isSubmitting: {
    type: Boolean,
    required: true
  }
});

const formValues = reactive({
  title: "",
  description: "",
  body: "",
  tagList: ""
});
const onSubmit = () => {
  emit("articleSubmit", { ...formValues, tagList: formValues.tagList.split(' ') });
};
</script>

<style scoped>

</style>
