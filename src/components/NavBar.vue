<template>
  <nav class="navbar">
    <div class="nav-container">
      
      <!-- Logo / Name -->
      <div class="logo">
        <RouterLink to="/">Alex Sprague</RouterLink>
      </div>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>

    </div>
  </nav>
</template>

<script setup>
// no logic yet — keep it simple
</script>

<style scoped>
.navbar {
  background-color: #111;
  padding: 1rem 2rem;

  position: sticky;
  top: 0;
  z-index: 1000; /* 🔥 prevents it from being covered */
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #fff;
}
</style>