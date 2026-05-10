<template>
  <div class="layout">
    <NavBar />

    <main class="main-content">
      <div class="content-container">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
</script>

<style scoped>
.layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0rem 1rem;
}

.content-container {
  width: 100%;
  max-width: 1100px;
}
</style>