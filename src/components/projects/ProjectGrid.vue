<!-- Comnponent to display some of my best projects to date -->
<template>
  <div class="fade-up">

    <!-- Grid to diplay my three best project so far -->
    <!-- Uses a Json to gather the parts needed to dynamically make each card -->
    <div class="grid-auto">
      <div v-for="project in projects" :key="project.id" class="glass-card">
        <!-- the entire card displayed is a link that takes the user to the GitHub of that project -->
        <a :href="project.url" target="blank" class="project-link">
          <div class="card-content">

            <div class="card-top">
              <span class="tag">Project</span>
            </div>

            <h3>{{ project.title }}</h3>

            <p>
              {{ project.description }}
            </p>

          </div>
        </a>
      </div>

    </div>

    <!-- Button to take the user to the Project page to see al my projects -->
    <div class="projects-button">
      <router-link to="/projects" class="btn btn-primary">
        View All Projects
      </router-link>
    </div>

  </div>
</template>

<script setup>
// Imports
import { computed } from 'vue'

// Json of my projects to display
const projects = [
  {
    id: 1,
    title: "ARK Breeding Companion App",
    description:
      "C# tool for managing ARK breeding—tracking stats, optimizing pairings, and simplifying complex workflows.",
    url: "https://github.com/Aethereal-Phoenix/Ark-Breeding-Calculator"
  },
  {
    id: 2,
    title: "C# Practice Projects",
    description:
      "Small applications and exercises reinforcing core C# concepts and problem-solving skills.",
    url: "https://github.com/Aethereal-Phoenix/Csharp_Players_Guide_5th_Edition"
  },
  {
    id: 3,
    title: "Developer Portfolio Website",
    description:
      "Vue-based portfolio showcasing projects and skills, built with reusable components and clean structure.",
    url: "https://github.com/Aethereal-Phoenix/Digital-Resume"
  }
]
</script>