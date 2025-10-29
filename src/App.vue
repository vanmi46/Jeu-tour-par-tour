<script setup>
import AppHeader from './components/AppHeader.vue'
import Player from './components/Player.vue'
import Attack from './components/Attack.vue'
import Battlelog from './components/Battlelog.vue'
</script>

<template>
  <AppHeader />
  <main class="container">
  <router-view />
  <Battlelog></Battlelog>
  </main>
</template>

<style scoped>
</style>

