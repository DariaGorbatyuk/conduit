<template>
<div class="feed-toggle">
  <ul class="nav nav-pills outline-active">
    <li class="nav-item" v-if="isLoggedIn">
      <router-link :to="{name: 'yourFeed'}" class="nav-link">Your feed</router-link>
    </li>
    <li class="nav-item" >
      <router-link :to="{name: 'globalFeed'}" class="nav-link">Global feed</router-link>
    </li>
    <li class="nav-item" v-if="tagName">
      <router-link :to="{name: 'tag'}" class="nav-link">{{tagName}}</router-link>
    </li>
  </ul>
</div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { getterTypes } from "@/store/modules/auth";

const store = useStore()
const isLoggedIn = computed(() => store.getters[getterTypes.isLoggedIn]);
const props = defineProps({
  tagName:{
    type: String,
    required: false
  }
})
</script>

<style scoped>

</style>
