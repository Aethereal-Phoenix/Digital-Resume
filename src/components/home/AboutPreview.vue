<template>
  <div class="about">
    <p>
      I build practical software with a focus on backend systems, where logic, data flow, and structure come together. 
      I enjoy designing applications that are modular, maintainable, and able to grow beyond their initial scope.
    </p>

    <p>
      I prioritize real-world projects over tutorials, with a focus on clean code, readability, and seeing things through to completion.
    </p>

    <router-link to="/about" class="link">
      Read More →
    </router-link>
  </div>
</template>

<style scoped>
.about {
  max-width: 650px;
  margin: 0 auto;
  
  text-align: center;
  animation: fadeUp 0.8s ease-out;
}

.about p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.secondary {
  opacity: 0.8;
}

.link {
  display: inline-block;
  margin-top: 1rem;
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}
</style>