<template>
  <div class="home">

    <!-- LANDING SECTION -->
    <section class="section main">
      <MainSection />
    </section>


    <!-- ========================= -->
    <!-- FEATURED PROJECTS         -->
    <!-- ========================= -->
    <section class="section featured-projects">
      <SectionHeader title="Featured Projects" subtitle="A selection of work showcasing my skills" />

      <div class="content">
        <ProjectGrid :limit="3" />
      </div>
    </section>

    <!-- ABOUT PREVIEW -->
    <section class="section about-preview">
      <SectionHeader title="About Me" subtitle="Who I am and what I focus on" />

      <div class="content">
        <AboutPreview />
      </div>
    </section>

    <!-- LANGUAGES AND FRAMEWORKS-->
    <section class="section skills">
      <SectionHeader title="Languages & Frameworks" subtitle="Tools I use to build software" />

      <div class="content">
        <SkillsGrid />
      </div>
    </section>

  </div>
</template>

<script setup>
// Sections
import MainSection from '../components/home/MainSection.vue'
import SectionHeader from '../components/shared/SectionHeader.vue'
import ProjectGrid from '../components/projects/ProjectGrid.vue'
import AboutPreview from '../components/home/AboutPreview.vue'
import SkillsGrid from '../components/home/SkillsGrid.vue'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.section {
  padding: 20px 20px;
}

.main {
  display: block;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
}
</style>