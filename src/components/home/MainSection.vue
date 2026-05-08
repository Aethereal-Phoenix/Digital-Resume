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
  padding: 0px;

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
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
}

/* ACCENT TEXT */
.accent {
  display: block;
  color: #7600ff;
}

/* SUBTEXT */
p {
  margin-top: 1rem;
  font-size: 1.25rem;
  opacity: 0.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* CTA BUTTONS */
.cta {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* PRIMARY BUTTON */
.primary {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.2s ease;
}

.primary:hover {
  transform: translateY(-2px);
}

/* SECONDARY BUTTON */
.secondary {
  border: 1px solid #ccc;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.2s ease;
}

.secondary:hover {
  background: #f5f5f5;
}

/* ANIMATION */
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
    font-size: 2.2rem;
  }

  p {
    font-size: 1rem;
  }

  .cta {
    flex-direction: column;
  }
}
</style>