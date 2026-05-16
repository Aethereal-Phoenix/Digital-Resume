<!-- Component to display all my projects I want to show off -->
<template>
  <div class="page fade-up">
    <!-- Main section -->
    <section class="section text-center">
      <h1>My Projects</h1>

      <p class="page-subtitle">
        A collection of coursework, personal projects, and ongoing learning
        focused on web development, software engineering, and cybersecurity.
      </p>

    </section>

    <!-- Featured projects -->
    <section class="section">

      <div class="section-heading text-center">
        <h2>Featured Projects</h2>

        <p>
          Selected projects showcasing modern web development,
          software engineering, and UI design.
        </p>
      </div>

      <div class="grid-auto">

        <!-- Displays my projects from the featuredProjects JSON in the script section -->
        <article v-for="project in featuredProjects" :key="project.title" class="glass-card">
          
          <div class="card-content">

            <div>
              <!-- The title of the project -->
              <h3>{{ project.title }}</h3>

              <!-- The description of the project -->
              <p class="description">
                {{ project.description }}
              </p>

            </div>

            <!-- Tech tags -->
            <!-- Languages and frameworks used in the project -->
            <div class="tags">

              <span v-for="tech in project.tech" :key="tech" class="tag">
                {{ tech }}
              </span>

            </div>

          </div>

          <!-- Action buttons -->
          <div class="card-actions">

            <!-- Button to go to the live site -->
            <a :href="project.live" target="_blank" class="btn btn-primary">
              Live Site
            </a>

            <!-- Button to go to the GitHun repo of the project -->
            <a :href="project.repo" target="_blank" class="btn btn-secondary">
              GitHub
            </a>

          </div>

        </article>

      </div>

    </section>

    <!-- Other learning -->
    <section class="section">

      <div class="section-heading">
        <h2>Other Learning</h2>

        <p>
          Continuous learning outside formal coursework.
        </p>
      </div>

      <div class="learning-grid">

        <!-- Projects pulled for the learning JSON in the script -->
        <div v-for="item in learning" :key="item.title" class="learning-card glass-card">

          <div>

            <!-- Project title -->
            <h3>{{ item.title }}</h3>

            <!-- Project description -->
            <p>{{ item.description }}</p>

          </div>

          <!-- The button open a new tab to the project -->
          <a :href="item.link" target="_blank" class="btn btn-primary">
            View
          </a>

        </div>

      </div>

    </section>

  </div>

  <!-- Additional projects -->
  <section class="section">

    <details class="additional-projects">

      <summary>
        Additional Web Development Projects
      </summary>

      <p class="additional-text">
        Earlier coursework and foundational web development projects
        focused on responsive layouts, semantic HTML, and CSS design.
      </p>

      <div class="grid-auto">

        <!-- Projects pulled from the aditionalProjects JSON in the script -->
        <article v-for="project in additionalProjects" :key="project.title" class="glass-card small-card">

          <div class="card-content">

            <div>

              <!-- Project title -->
              <h3>{{ project.title }}</h3>

              <!-- Project description -->
              <p class="description">
                {{ project.description }}
              </p>

            </div>

            <!-- Tech tags -->
            <div class="tags">

              <!-- Displays the langauges and frameworks used in the project -->
              <span v-for="tech in project.tech" :key="tech" class="tag">
                {{ tech }}
              </span>

            </div>

          </div>

          <!-- Action buttons -->
          <div class="card-actions">

            <!-- Button to go to a live site -->
            <a :href="project.live" target="_blank" class="btn btn-primary">
              Live Site
            </a>

            <!-- Button to go to the GitHub repo -->
            <a :href="project.repo" target="_blank" class="btn btn-secondary">
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