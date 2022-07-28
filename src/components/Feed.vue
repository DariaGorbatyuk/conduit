<template>
  <div> FEED {{apiUrl}}</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import {actionTypes} from "@/store/modules/feed";

const store= useStore()
const props = defineProps({
  apiUrl:{
    type: String,
    required: true
  }
})
onMounted(()=>{
  store.dispatch(actionTypes.getFeed, { apiUrl: props.apiUrl })
})
</script>

<style scoped>

</style>
