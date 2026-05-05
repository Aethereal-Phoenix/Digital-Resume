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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Main content fills remaining space */
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

/* Controls width + readability */
.content-container {
  width: 100%;
  max-width: 1100px; /* tweak this later */
}
</style>