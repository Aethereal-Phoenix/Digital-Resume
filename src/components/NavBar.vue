<template>
  <nav class="navbar">
    <div class="nav-container">

        <!-- Logo / Name -->
        <div class="logo">
          <RouterLink to="/">Alex <span class="accent">Sprague</span></RouterLink>
        </div>
        
        <!-- PokeMon display -->
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
// Imports the Pokemon component so it can be used in the navbar
import PokemonAsync from '../components/shared/PokemonAsync.vue'
</script>