<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link :to="{name: 'globalFeed'}">MediumClone</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'globalFeed'}">Home</router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'newArticle'}"><i class="ion-compose"></i>&nbsp;New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'settings'}"><i class="ion-gear-a"></i>&nbsp; Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
             :to="{name: 'userProfile', params:{slug: currentUser.username}}">
              <img class="user-pic" :src="currentUser.image" alt="">&nbsp; {{currentUser.username}}
            </router-link>
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'login'}">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'register'}">Sign up</router-link>
          </li>
        </template>
      </ul>

    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import {getterTypes} from "@/store/modules/auth";

const store = useStore();
const isLoggedIn = computed(() => store.getters[getterTypes.isLoggedIn]);
const isAnonymous = computed(() => store.getters[getterTypes.isAnonymous]);
const currentUser = computed(() => store.getters[getterTypes.currentUser]);
</script>

<style scoped>

</style>
