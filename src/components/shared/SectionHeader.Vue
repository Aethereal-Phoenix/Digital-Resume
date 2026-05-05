<template>
  <div class="section-header">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

p {
  margin-top: 0.5rem;
  opacity: 0.7;
}
</style>