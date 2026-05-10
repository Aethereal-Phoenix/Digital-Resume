<template>
  <nav class="navbar">
    <div class="nav-container">

      <!-- Logo / Name -->
      <div class="logo">
        <RouterLink to="/">Alex Sprague</RouterLink>
      </div>

      <div>
        <PokemonAsync />
      </div>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script setup>
import PokemonAsync from "./shared/PokemonAsync.vue"
</script>

<style scoped>
.navbar {
  background-color: #111;
  padding: .5rem 1rem;

  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
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
  color: #7600ff;
}
</style>