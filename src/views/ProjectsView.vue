<template>
  <div class="projects-page">

    <!-- ========================= -->
    <!-- HERO SECTION              -->
    <!-- ========================= -->
    <section class="main">

      <h1>My Projects</h1>
      
      <p class="main-text">
        A collection of coursework, personal projects, and ongoing learning
        focused on web development, software engineering, and cybersecurity.
      </p>

    </section>

    <!-- FEATURED PROJECTS -->
    <section class="section">

      <div class="section-heading">
        <h2>Featured Projects</h2>

        <p>
          Selected projects showcasing modern web development,
          software engineering, and UI design.
        </p>
      </div>

      <div class="featured-project-grid">

        <article
          v-for="project in featuredProjects"
          :key="project.title"
          class="project-card"
        >

          <div class="card-content">

            <div class="card-top">

              <h3>{{ project.title }}</h3>

              <p class="description">
                {{ project.description }}
              </p>

            </div>

            <!-- TECH TAGS -->
            <div class="tags">

              <span
                v-for="tech in project.tech"
                :key="tech"
                class="tag"
              >
                {{ tech }}
              </span>

            </div>

          </div>

          <!-- ACTION BUTTONS -->
          <div class="card-actions">

            <a :href="project.live" target="_blank" class="btn primary">
              Live Site
            </a>

            <a :href="project.repo" target="_blank" class="btn secondary">
              GitHub
            </a>

          </div>

        </article>

      </div>

    </section>

    <!-- OTHER LEARNING -->
    <section class="section">

      <div class="section-heading">
        <h2>Other Learning</h2>

        <p>
          Continuous learning outside formal coursework.
        </p>
      </div>

      <div class="learning-grid">

        <div
          v-for="item in learning"
          :key="item.title"
          class="learning-card"
        >

          <div>

            <h3>{{ item.title }}</h3>

            <p>{{ item.description }}</p>

          </div>

          <a :href="item.link" target="_blank" class="btn secondary">
            View
          </a>

        </div>

      </div>

    </section>

  </div>

    <!-- ADDITIONAL PROJECTS -->
    <section class="section">

      <details class="additional-projects">

        <summary>
          Additional Web Development Projects
        </summary>

        <p class="additional-text">
          Earlier coursework and foundational web development projects
          focused on responsive layouts, semantic HTML, and CSS design.
        </p>

        <div class="project-grid additional-grid">

          <article
            v-for="project in additionalProjects"
            :key="project.title"
            class="project-card small-card"
          >

            <div class="card-content">

              <div class="card-top">

                <h3>{{ project.title }}</h3>

                <p class="description">
                  {{ project.description }}
                </p>

              </div>

              <!-- TECH TAGS -->
              <div class="tags">

                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="tag"
                >
                  {{ tech }}
                </span>

              </div>

            </div>

            <!-- ACTION BUTTONS -->
            <div class="card-actions">

              <a :href="project.live" target="_blank" class="btn primary">
                Live Site
              </a>

              <a :href="project.repo" target="_blank" class="btn secondary">
                GitHub
              </a>

            </div>

          </article>

        </div>

      </details>

    </section>
</template>

<script setup>

const featuredProjects = [
  {
    title: 'Ark Survival Evolved Breeding Optimizer',
    description: 'A web based application that automates and simplifies the complex breeding mechanic in A:SE to make it easy for anyone.',
    tech: ['C#', 'HTML', 'CSS', 'ASP.NET'],
    live: '...',
    repo: '...'
  },

  {
    title: 'The Lost Coin',
    description: 'Final course project combining multiple HTML and CSS concepts into a polished multi-page experience.',
    tech: ['HTML', 'CSS'],
    live: 'https://aethereal-phoenix.github.io/CIS_130-Final/',
    repo: 'https://github.com/Aethereal-Phoenix/CIS_130-Final'
  },

  {
    title: 'Digital Resume',
    description: 'Modern Vue-powered portfolio and digital resume website showcasing projects, coursework, and ongoing learning.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Vite'],
    live: 'https://alsprague.tech',
    repo: 'https://github.com/Aethereal-Phoenix/Digital-Resume'
  }
]

const additionalProjects = [
  {
    title: 'About a Company',
    description: 'Responsive informational business website built with HTML and CSS.',
    tech: ['HTML', 'CSS'],
    live: 'https://aethereal-phoenix.github.io/CIS_130-About-a-Company/',
    repo: 'https://github.com/Aethereal-Phoenix/CIS_130-About-a-Company'
  },

  {
    title: 'Bed and Breakfast',
    description: 'Multi-page hospitality website focused on layout and responsive design.',
    tech: ['HTML', 'CSS'],
    live: 'https://aethereal-phoenix.github.io/CIS_130-Bed-and-Breakfast/',
    repo: 'https://github.com/Aethereal-Phoenix/CIS_130-Bed-and-Breakfast'
  },

  {
    title: 'The Funyon',
    description: 'Satirical news-style website exploring typography and layout structure.',
    tech: ['HTML', 'CSS'],
    live: 'https://aethereal-phoenix.github.io/CIS_130-The_Funyon/',
    repo: 'https://github.com/Aethereal-Phoenix/CIS_130-The_Funyon'
  },

  {
    title: 'Fit for Fitness',
    description: 'Fitness-focused website emphasizing responsive UI and clean structure.',
    tech: ['HTML', 'CSS'],
    live: 'https://aethereal-phoenix.github.io/CIS_130-Fit_for_Fitness/',
    repo: 'https://github.com/Aethereal-Phoenix/CIS_130-Fit_for_Fitness'
  },

  {
    title: 'Pawfect Pet Care',
    description: 'Pet care website with responsive layouts and accessible navigation.',
    tech: ['HTML', 'CSS'],
    live: 'https://aethereal-phoenix.github.io/CIS_130-Pawfect_Pet_Care/',
    repo: 'https://github.com/Aethereal-Phoenix/CIS_130-Pawfect_Pet_Care'
  }
]

const learning = [
  {
    title: 'C# Players Guide',
    description: 'Exercises and projects completed while studying advanced C# concepts.',
    link: 'https://github.com/Aethereal-Phoenix/Csharp_Players_Guide_5th_Edition'
  },

  {
    title: 'TryHackMe',
    description: 'Hands-on cybersecurity labs and penetration testing practice.',
    link: 'https://tryhackme.com/p/AetherealPhoenix'
  }
]

</script>

<style scoped>

/* PAGE LAYOUT */

.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0rem 1.5rem;
}

/* MAIN */

.main {
  margin-bottom: 1rem;
}

.main h1 {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  margin-bottom: 1,5rem;
}

.main-text {
  max-width: 700px;
  font-size: 1.25rem;
  line-height: 1.7;
  opacity: 0.8;
}

/* SECTIONS */

.section {
  margin-bottom: 5rem;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.section-heading p {
  opacity: 0.7;
}

/* PROJECT GRID */

.featured-project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
}

/* PROJECT CARD */

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 20rem;

  padding: 1.5rem;

  border-radius: 1.25rem;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(10px);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);

  border-color: rgba(255, 255, 255, 0.2);

  background: rgba(255, 255, 255, 0.05);
}

.small-card {
  min-height: 280px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-top h3 {
  font-size: 1,5rem;
  margin-bottom: 1rem;
}

.description {
  line-height: 1.6;
  opacity: 0.8;
}

/* TAGS */

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}

.tag {
  padding: .5rem 1rem;

  border-radius: 1000px;

  font-size: .8rem;

  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* BUTTONS */

.card-actions {
  display: flex;
  gap: 1rem;

  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: .8rem 1rem;

  border-radius: .6rem;

  text-decoration: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.btn:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.primary {
  background: white;
  color: black;
}

.secondary {
  border: 1px solid rgba(255, 255, 255, 0.15);
}
/* ADDITIONAL PROJECTS */

.additional-projects {
  padding: 1.5rem;

  border-radius: 1.25rem;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);
}

.additional-projects summary {
  cursor: pointer;

  list-style: none;

  font-size: 1rem;
  font-weight: 600;

  transition: opacity 0.2s ease;
}

.additional-projects summary:hover {
  opacity: 0.8;
}

.additional-projects summary::-webkit-details-marker {
  display: none;
}

.additional-projects[open] summary {
  margin-bottom: 1rem;
}

.additional-text {
  opacity: 0.7;

  margin-bottom: 32px;

  line-height: 1.6;
}

/* LEARNING SECTION */

.learning-grid {
  display: grid;
  gap: 1rem;
}

.learning-card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem;

  border-radius: 1rem;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);
}

.learning-card h3 {
  margin-bottom: .5rem;
}

.learning-card p {
  opacity: 0.7;
}

/* MOBILE */

@media (max-width: 700px) {

  .card-actions {
    flex-direction: column;
  }

  .learning-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

}

</style>