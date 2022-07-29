<template>
  <div>
    <mcv-loading  v-if="isLoading"></mcv-loading>
    <div v-if="errors">{{ errors }}</div>
    <div v-if="feed">
      <div class="article-preview" v-for="(article, idx) in feed.articles" :key="idx">
        <div class="article-meta">
          <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
            <img :src="article.author.image" alt=""></router-link>
          <div class="info">
            <router-link class="author" :to="{name: 'userProfile', params: {slug: article.author.username}}">
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createAt }}</span>
          </div>
          <div class="pull-xs-right">ADD TO FAV</div>
        </div>
        <router-link class="preview-link" :to="{name: 'article', params: {slug: article.slug}}">
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          TAG LIST
        </router-link>
      </div>

      <mcv-pagination :total="feed.articlesCount"
                      :limit="LIMIT"
                      :current-page="currentPage"
                      :url="baseUrl"
      ></mcv-pagination>
    </div>

  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { actionTypes } from "@/store/modules/feed";
import McvPagination from "@/components/Pagination";
import { LIMIT } from "@/helpers/vars";
import { useRoute } from "vue-router/dist/vue-router";
import { stringify, parseUrl } from "query-string";
import McvLoading from "@/components/Loading"
const store = useStore();
const route = useRoute();
const props = defineProps({
  apiUrl: {
    type: String,
    required: true
  }
});

const baseUrl = computed(() => route.path);
const currentPage = computed(() => +route.query.page || 1);
const feed = computed(() => store.state.feed.data);
const isLoading = computed(() => store.state.feed.isLoading);
const errors = computed(() => store.state.feed.errors);
const offset = computed(() => currentPage.value * LIMIT - LIMIT);
onMounted(() => {
  getFeed();
});

function getFeed() {
  const parsedUrl = parseUrl(props.apiUrl);
  const params = stringify({
    limit: LIMIT,
    offset: offset.value,
    ...parsedUrl.query
  });
  const apiUrlWithParams = `${parsedUrl.url}?${params}`;
  store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParams });
}

watch(currentPage, () => {
  getFeed();
});
</script>

<style scoped>

</style>
