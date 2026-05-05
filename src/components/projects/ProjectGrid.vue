<template>
  <div class="grid">
    <div 
      v-for="project in displayedProjects" 
      :key="project.id" 
      class="card"
    >
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>

    <div class="cta">
      <router-link to="/projects" class="primary">
          View Projects
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
    description: "C# tool for managing ARK breeding—tracking stats, optimizing pairings, and simplifying complex workflows."
  },
  {
    id: 2,
    title: "C# Practice Projects",
    description: "Small applications and exercises reinforcing core C# concepts and problem-solving skills."
  },
  {
    id: 3,
    title: "Developer Portfolio Website",
    description: "Vue-based portfolio showcasing projects and skills, built with reusable components and clean structure."
  }
]

const displayedProjects = computed(() =>
  props.limit ? projects.slice(0, props.limit) : projects
)
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.cta {
  grid-column: 1 / -1;   /* span full grid width */
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
</style>