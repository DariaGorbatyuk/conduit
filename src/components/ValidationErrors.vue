<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorMessages" :key="errorMessage">{{errorMessage}}</li>
  </ul>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  validationErrors: {
    type: Object,
    required: true,
  }
});
 const errorMessages = computed(()=>{
   return Object.keys(props.validationErrors).map(key=>{
     const messages = props.validationErrors[key].join()
     return key +' '+ messages
   })
 })

</script>

<style scoped>
li{
  text-align: left;
}
</style>
