<template>
  <mcv-top-bar></mcv-top-bar>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link :to="{name: 'register'}">Register</router-link>  |-->
<!--    <router-link :to="{name: 'login'}">Login</router-link>-->
<!--  </nav>-->
  <router-view />
</template>
<script setup>
import McvTopBar from '@/components/TopBar'
</script>
