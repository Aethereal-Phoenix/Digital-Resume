<template>
  <div class="skills-wrapper">

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
.skills-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeUp 0.8s ease-out;
  margin-bottom: 100px;
}

/* CATEGORY */
.category {
  text-align: center;
}

.category h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  opacity: 0.8;
}

/* GRID */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

/* CHIP */
.skill {
  padding: 16px 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 0.9rem;

  background: transparent;
  transition: all 0.2s ease;
  cursor: default;
}

/* HOVER EFFECT */
.skill:hover {
  transform: translateY(-4px) scale(1.05);
  background: var(--hover-color);
  color: var(--text-color);
  border-color: var(--hover-color);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>