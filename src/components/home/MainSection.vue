<template>
  <div class="main-container">

    <div class="main-content">
      <!-- HEADLINE -->
      <h1>
        Computer Science Student
        <span class="accent">Building Real Software</span>
      </h1>

      <!-- SUBTEXT -->
      <p>
        Backend-focused developer with a growing full-stack skill set, building practical applications with C# and modern web technologies.
        I focus on clean, scalable code and designing systems that can grow beyond their initial scope.
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style>
.main-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  min-height: 50vh;
}

.main-content {
  text-align: center;
  animation: fadeUp 0.8s ease-out;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
}

.accent {
  display: block;
  color: #7600ff;
}

p {
  margin-top: 1rem;
  font-size: 1rem;
  opacity: 0.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .cta {
    flex-direction: column;
  }
}
</style>