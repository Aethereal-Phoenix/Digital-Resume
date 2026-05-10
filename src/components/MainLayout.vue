<template>
  <div class="site-layout">
    <NavBar />

    <main class="site-main">
      <div class="page">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
</script>

<style scoped>
</style>