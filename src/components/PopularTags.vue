<template>
  <div class="sidebar">
    <p>Popular Tags</p>

    <div class="tag-list" v-if="tags">
      <router-link v-for="tag in tags" :key="tag" :to="{name: 'tag', params:{slug: tag}}" class="tag-default tag-pill">{{ tag }}
      </router-link>
    </div>

    <div class="ng-hide" v-if="isLoading">
      Loading tags...
    </div>

    <div class="post-preview ng-hide" v-if="!isLoading && !tags">
      No tags are here... yet.
    </div>

  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { actionTypes } from "@/store/modules/popularTags";
import { useStore } from "vuex";

const store = useStore();

const tags = computed(() => store.state.popularTags.data);
const isLoading = computed(() => store.state.popularTags.isLoading);
onMounted(() => {
  store.dispatch(actionTypes.getPopularTags)
});
</script>

<style scoped>

</style>
