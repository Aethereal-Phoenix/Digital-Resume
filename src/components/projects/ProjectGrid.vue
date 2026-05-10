<template>
  <div class="projects-section">

    <div class="grid">
      <div
        v-for="project in displayedProjects"
        :key="project.id"
        class="card"
      >
        <div class="card-content">

          <div class="card-top">
            <span class="tag">Project</span>
          </div>

          <h3>{{ project.title }}</h3>

          <p>
            {{ project.description }}
          </p>

        </div>
      </div>
    </div>

    <div class="projects-button">
      <router-link to="/projects" class="primary">
        View All Projects
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  limit: Number
})

const projects = [
  {
    id: 1,
    title: "ARK Breeding Companion App",
    description:
      "C# tool for managing ARK breeding—tracking stats, optimizing pairings, and simplifying complex workflows."
  },
  {
    id: 2,
    title: "C# Practice Projects",
    description:
      "Small applications and exercises reinforcing core C# concepts and problem-solving skills."
  },
  {
    id: 3,
    title: "Developer Portfolio Website",
    description:
      "Vue-based portfolio showcasing projects and skills, built with reusable components and clean structure."
  }
]

const displayedProjects = computed(() =>
  props.limit
    ? projects.slice(0, props.limit)
    : projects
)
</script>

<style scoped>
.projects-section {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.card {
  position: relative;

  background: rgba(255, 255, 255, 0.04);

  border: .1rem solid rgba(255, 255, 255, 0.08);

  border-radius: 1rem;

  overflow: hidden;

  backdrop-filter: blur(10px);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.card::before {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.05),
      transparent
    );

  opacity: 0;

  transition: opacity 0.25s ease;
}

.card:hover {
  transform: translateY(-8px);

  border-color: rgba(255,255,255,0.18);

  box-shadow:
    0 10px 30px rgba(0,0,0,0.25);
}

.card:hover::before {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-top {
  display: flex;
  justify-content: flex-start;
}

.tag {
  font-size: 0.75rem;

  letter-spacing: 0.1rem;

  text-transform: uppercase;

  padding:
    0.35rem 0.7rem;

  border-radius: 999px;

  background:
    rgba(255,255,255,0.08);

  color:
    rgba(255,255,255,0.75);
}

h3 {
  font-size: 1.3rem;

  font-weight: 700;

  line-height: 1.3;

  color: white;
}

p {
  line-height: 1.7;

  color:
    rgba(255,255,255,0.75);
}

.primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding:
    .75rem 1.5rem;

  border-radius: 1.25rem;

  text-decoration: none;

  font-weight: 600;

  color: white;

  background:
    linear-gradient(
      45deg,
      #7600ff,
      #042ed9
    );

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.primary:hover {
  transform: translateY(-2px);

  box-shadow:
    0 8px 24px rgba(118, 0, 255, .75);
}

.projects-section{
  animation: fadeUp 0.8s ease-out;
}

.projects-button{
  margin-top: 1rem;
}
</style>