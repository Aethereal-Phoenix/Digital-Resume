<template>
  <div class="home">

    <!-- ========================= -->
    <!-- HERO / LANDING SECTION    -->
    <!-- ========================= -->
    <section class="hero">
      <HeroSection />
    </section>


    <!-- ========================= -->
    <!-- FEATURED PROJECTS         -->
    <!-- ========================= -->
    <section class="section featured-projects">
      <SectionHeader 
        title="Featured Projects"
        subtitle="A selection of work showcasing my skills"
      />

      <div class="content">
        <ProjectGrid :limit="3" />
      </div>
    </section>


    <!-- ========================= -->
    <!-- ABOUT PREVIEW             -->
    <!-- ========================= -->
    <section class="section about-preview">
      <SectionHeader 
        title="About Me"
        subtitle="Who I am and what I focus on"
      />

      <div class="content">
        <AboutPreview />
      </div>
    </section>


    <!-- ========================= -->
    <!-- SKILLS / TECH STACK       -->
    <!-- ========================= -->
    <section class="section skills">
      <SectionHeader 
        title="Skills & Technologies"
        subtitle="Tools I use to build software"
      />

      <div class="content">
        <SkillsGrid />
      </div>
    </section>


    <!-- ========================= -->
    <!-- CALL TO ACTION            -->
    <!-- ========================= -->
    <!-- <section class="cta">
      <CallToAction />
    </section> -->


  </div>
</template>

<script setup>
// Sections (you’ll build these one at a time)
import HeroSection from '../components/home/HeroSection.vue'
import SectionHeader from '../components/shared/SectionHeader.vue'
import ProjectGrid from '../components/projects/ProjectGrid.vue'
import AboutPreview from '../components/home/AboutPreview.vue'
import SkillsGrid from '../components/home/SkillsGrid.vue'
import CallToAction from '../components/home/CallToAction.vue'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

/* Shared section styling */
.section {
  padding: 3rem 2rem;
}

/* Keep hero visually dominant */
.hero {
  display: block; /* 🔥 remove flex centering */
}

/* Content wrapper for consistent width */
.content {
  max-width: 1100px;
  margin: 0 auto;
}

/* CTA usually stands out */
.cta {
  padding: 5rem 2rem;
  text-align: center;
}
</style>