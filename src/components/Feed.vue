<template>
  <div>
    <div v-if="isLoading">LOADING</div>
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


    </div>
    <mcv-pagination :total="pagination.total"
                    :limit="pagination.limit"
                    :current-page="pagination.currentPage"
                    :url="pagination.url"
    ></mcv-pagination>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { actionTypes } from "@/store/modules/feed";
import McvPagination from "@/components/Pagination"
const store = useStore();
const props = defineProps({
  apiUrl: {
    type: String,
    required: true
  }
});
const pagination = {
  total: 500,
  limit: 10,
  currentPage: 5,
  url: '/tags/dragons'
}
const feed = computed(() => store.state.feed.data);
const isLoading = computed(() => store.state.feed.isLoading);
const errors = computed(() => store.state.feed.errors);
onMounted(() => {
  store.dispatch(actionTypes.getFeed, { apiUrl: props.apiUrl });
});
</script>

<style scoped>

</style>
