<template>
  <div class="skills-wrapper fade-up">

    <!-- LANGUAGES -->
    <div class="category">
      <h3>Languages</h3>
      <div class="skills">
        <span v-for="skill in languages" :key="skill.name" class="skill" :style="{
          '--hover-color': skill.color,
          '--text-color': skill.textColor
        }">
          {{ skill.name }}
        </span>
      </div>
    </div>

    <!-- FRAMEWORKS -->
    <div class="category">
      <h3>Frameworks & Tools</h3>
      <div class="skills">
        <span v-for="skill in frameworks" :key="skill.name" class="skill" :style="{
          '--hover-color': skill.color,
          '--text-color': skill.textColor
        }">
          {{ skill.name }}
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
const languages = [
  { name: "C#", color: "#68217A", textColor: "#ffffff" },
  { name: "JavaScript", color: "#f7df1e", textColor: "#000000" },
  { name: "HTML", color: "#e34c26", textColor: "#ffffff" },
  { name: "CSS", color: "#264de4", textColor: "#ffffff" }
]

const frameworks = [
  { name: "ASP.NET", color: "#512bd4", textColor: "#ffffff" },
  { name: "Vue", color: "#42b883", textColor: "#ffffff" },
  { name: ".NET MAUI", color: "#512bd4", textColor: "#ffffff" }
]
</script>

<style scoped>
</style>