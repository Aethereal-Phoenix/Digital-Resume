<template>
  <div class="projects-section fade-up">

    <div class="grid-auto">
      <div v-for="project in displayedProjects" :key="project.id" class="glass-card">
        
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
      <router-link to="/projects" class="btn btn-primary">
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

<style scoped></style>