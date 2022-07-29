<template>
  <div>{{ message }}</div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: false,
    default: "Something went wrong"
  }
});
</script>

<style scoped>

</style>
