<template>
  <div class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
        <div class="col-md-3">
          POPULAR TAG
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import McvFeed from "@/components/Feed";

const apiUrl = "/articles";
</script>

<style scoped>

</style>
