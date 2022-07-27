<template>
  <mcv-top-bar></mcv-top-bar>
  <router-view />
</template>
<script setup>
import McvTopBar from '@/components/TopBar'
import {actionTypes} from "@/store/modules/auth";
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore()
onMounted(()=>{
  store.dispatch(actionTypes.getCurrentUser)
})
</script>
