<template>
  <div class="projects">

    <!-- ========================= -->
    <!-- MAIN PROJECTS SECTION     -->
    <!-- ========================= -->
    <section class="section">

      <!-- Section Title -->
      <h1 class="title">My Projects</h1>
      <br>
      <br>
      <h2>(HTML & CSS)</h2>

      <!-- Column Headers -->
      <div class="row header">
        <span>Project</span>
        <span>Live</span>
        <span>Repository</span>
      </div>

      <!-- ========================= -->
      <!-- PROJECT ROWS              -->
      <!-- ========================= -->
      <!-- Each row = ONE project -->
      <!-- Copy/paste a row to add more -->

      <div class="row">
        <span>About a Company</span>
        <a href="https://aethereal-phoenix.github.io/CIS_130-About-a-Company/" target="_blank">Live</a>
        <a href="https://github.com/Aethereal-Phoenix/CIS_130-About-a-Company" target="_blank">GitHub Repo</a>
      </div>

      <div class="row">
        <span>Bed and Breakfast</span>
        <a href="https://aethereal-phoenix.github.io/CIS_130-Bed-and-Breakfast/" target="_blank">Live</a>
        <a href="https://github.com/Aethereal-Phoenix/CIS_130-Bed-and-Breakfast" target="_blank">GitHub Repo</a>
      </div>

      <div class="row">
        <span>The Funyon</span>
        <a href="https://aethereal-phoenix.github.io/CIS_130-The_Funyon/" target="_blank">Live</a>
        <a href="https://github.com/Aethereal-Phoenix/CIS_130-The_Funyon" target="_blank">GitHub Repo</a>
      </div>

      <div class="row">
        <span>Fit for Fitness</span>
        <a href="https://aethereal-phoenix.github.io/CIS_130-Fit_for_Fitness/" target="_blank">Live</a>
        <a href="https://github.com/Aethereal-Phoenix/CIS_130-Fit_for_Fitness" target="_blank">GitHub Repo</a>
      </div>

      <div class="row">
        <span>Pawfect Pet Care</span>
        <a href="https://aethereal-phoenix.github.io/CIS_130-Pawfect_Pet_Care/" target="_blank">Live</a>
        <a href="https://github.com/Aethereal-Phoenix/CIS_130-Pawfect_Pet_Care" target="_blank">GitHub Repo</a>
      </div>

      <div class="row">
        <span>The Lost Coin</span>
        <a href="https://aethereal-phoenix.github.io/CIS_130-Final/" target="_blank">Live</a>
        <a href="https://github.com/Aethereal-Phoenix/CIS_130-Final" target="_blank">GitHub Repo</a>
      </div>

      <div class="row">
        <span>My Digital Resume (This Page)</span>
       <a href="https://alsprague.tech" target="_blank">Live</a>
        <a href="https://github.com/Aethereal-Phoenix/Digital-Resume" target="_blank">GitHub Repo</a>
      </div>

    </section>

    <!-- ========================= -->
    <!-- OTHER LEARNING SECTION    -->
    <!-- ========================= -->
    <section class="section">

      <h2 class="subtitle">Other Learning</h2>

      <div class="row">
        <span>C# Players Guide</span>
        <span></span> <!-- Empty column to keep alignment -->
        <a href="https://github.com/Aethereal-Phoenix/Csharp_Players_Guide_5th_Edition" target="_blank">GitHub Repo</a>
      </div>

      <div class="row">
        <span>TryHackMe</span>
        <span></span>
        <a href="https://tryhackme.com/p/AetherealPhoenix" target="_blank">My Profile</a>
      </div>


    </section>
  </div>
</template>

<script setup>
// No logic yet — keep structure clear first
</script>

<style scoped>

/* Page wrapper */
.projects {
  padding: 2rem 1rem;
}

/* Section spacing */
.section {
  margin-bottom: 3rem;
}

/* Titles */
.title {
  margin-bottom: 1rem;
}

.subtitle {
  margin-bottom: 1rem;
}

/* ========================= */
/* ROW SYSTEM (IMPORTANT)    */
/* ========================= */

/*
  Grid layout:
  Column 1 → Project Name
  Column 2 → Live Link
  Column 3 → Repo Link
*/
.row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 0.5rem 0;
  align-items: center;
}

/* Header row styling */
.header {
  font-weight: bold;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 0.5rem;
}

/* Links */
a {
  text-decoration: underline;
  cursor: pointer;
}

/* Optional hover polish */
a:hover {
  opacity: 0.7;
}

</style>