<template>
  <button class="btn btn-sm"
          :class="{'btn-primary': isFavoriteOptimistic, 'btn-outline-primary': !isFavoriteOptimistic}" type="button"
          @click="handleLike"
  >
    <i class="ion-heart"></i>
    <span>&nbsp; {{ favoritesCountOptimistic }}</span>
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { actionTypes } from "@/store/modules/addToFav";

const props = defineProps({
  isFavorite: {
    type: Boolean,
    required: true
  },
  articleSlug: {
    type: String,
    required: true
  },
  favoritesCount: {
    type: Number,
    required: true
  }
});
const store = useStore();
const isFavoriteOptimistic = ref(props.isFavorite);
const favoritesCountOptimistic = ref(props.favoritesCount);
const handleLike = () => {
  store.dispatch(actionTypes.addToFav,
    {
      slug: props.articleSlug,
      isFavorited: isFavoriteOptimistic
    });
  if (isFavoriteOptimistic.value) {
    favoritesCountOptimistic.value = favoritesCountOptimistic.value - 1;
  } else {
    favoritesCountOptimistic.value = favoritesCountOptimistic.value + 1;
  }
  isFavoriteOptimistic.value = !isFavoriteOptimistic.value;
};
</script>

<style scoped>

</style>
