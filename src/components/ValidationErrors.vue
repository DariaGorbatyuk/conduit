<template>
  <ul class="error-messages">
    <li v-for="errorKey in errorsItem" :key="errorKey">{{ errorKey }} {{ props.validationErrors[errorKey].join() }}</li>
  </ul>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  validationErrors: {
    type: Object,
    required: true,
    default: {}
  }
});
const errorsItem = computed(() => Object.keys(props.validationErrors));

</script>

<style scoped>

</style>
