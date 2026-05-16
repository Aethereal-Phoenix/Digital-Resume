<template>
  <nav class="navbar">
    <div class="nav-container">

      <!-- Logo / Name -->
      <div class="logo text-center">
        <RouterLink to="/">Alex <span class="accent">Sprague</span></RouterLink>
      </div>

      <div class="pokemon-wrapper">
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
</style>