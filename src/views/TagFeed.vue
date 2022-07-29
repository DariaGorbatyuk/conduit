<template>
  <div class="home-page">
    <mcv-banner></mcv-banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed-toggler :tag-name="route.params.slug"></mcv-feed-toggler>
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
        <div class="col-md-3">
          <mcv-popular-tags></mcv-popular-tags>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import McvFeed from "@/components/Feed";
import McvPopularTags from "@/components/PopularTags"
import McvBanner from "@/components/Banner"
import McvFeedToggler from "@/components/FeedToggler"
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router/dist/vue-router";
const route = useRoute()
const apiUrl = computed(()=>`/articles/?tag=${route.params.slug}`)

</script>

<style scoped>

</style>
