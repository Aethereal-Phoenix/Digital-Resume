<template>
  <div class="cta text-center fade-up">

    <h2 class="mb-3">
      Want to see more?
    </h2>

    <p class="mb-4 opacity-75">
      Check out my projects or learn more about me.
    </p>

    <div class="d-flex justify-content-center gap-3 flex-wrap">

      <router-link
        to="/projects"
        class="btn btn-primary px-4 py-2 primary-btn"
      >
        View Projects
      </router-link>

      <router-link
        to="/about"
        class="btn btn-outline-light px-4 py-2 secondary-btn"
      >
        About Me
      </router-link>

    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>

/* ========================= */
/* CTA                       */
/* ========================= */

.cta {
  animation: fadeUp 0.8s ease-out;
}

/* ========================= */
/* BUTTONS                   */
/* ========================= */

.primary-btn {
  background: #4f46e5;
  border-color: #4f46e5;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.secondary-btn {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.secondary-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

/* ========================= */
/* ANIMATION                 */
/* ========================= */

.fade-up {
  animation: fadeUp 0.8s ease-out;
}

</style>