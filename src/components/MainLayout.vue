<!-- The main component that everything else goes inside of -->
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
// Imports the NavBar so it can be used in the component
import NavBar from './NavBar.vue'
</script>