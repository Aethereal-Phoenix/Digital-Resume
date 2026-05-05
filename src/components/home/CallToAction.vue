<template>
  <div class="cta">
    <h2>Want to see more?</h2>
    <p>Check out my projects or learn more about me.</p>

    <div class="buttons">
      <router-link to="/projects" class="primary">
        View Projects
      </router-link>

      <router-link to="/about" class="secondary">
        About Me
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.cta {
  text-align: center;
}

.buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.primary {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
}

.secondary {
  border: 1px solid #ccc;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
}
</style>