<template>
  <div class="page contact-page fade-up">
    <section class="section text-center">
      <h1>Let’s Connect</h1>

      <p class="page-subtitle text-center">
        Questions, opportunities, collaborations, or project inquiries —
        feel free to send a message.
      </p>

    </section>

    <!-- CONTACT CARD -->
    <section class="contact-wrapper">

      <form action="https://formsubmit.co/6e3b188ede6049622d2d41cb939c6ebc" method="POST" class="contact-card glass-card">

        <!-- FormSubmit Settings -->
        <input type="hidden" name="_captcha" value="false">

        <!-- NAME ROW -->
        <div class="row two-column">

          <div class="input-group">

            <label for="firstName">
              First Name
            </label>

            <input type="text" id="firstName" name="firstName" placeholder="John" pattern="[A-Za-z]+"
              title="First name cannot contain numbers." required>

          </div>

          <div class="input-group">

            <label for="lastName">
              Last Name
            </label>

            <input type="text" id="lastName" name="lastName" placeholder="Doe" pattern="[A-Za-z]+"
              title="Last name cannot contain numbers." required>

          </div>

        </div>

        <!-- CONTACT ROW -->
        <div class="row two-column">

          <div class="input-group">

            <label for="email">
              Email
            </label>

            <input type="email" id="email" name="email" placeholder="example@email.com" required>

          </div>

          <div class="input-group">

            <label for="phone">
              Phone Number
            </label>

            <input type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9\-()\s]+"
              title="Phone number cannot contain letters.">

          </div>

        </div>

        <!-- MESSAGE -->
        <div class="input-group">

          <label for="message">
            Message
          </label>

          <textarea id="message" name="message" rows="8"
            placeholder="Tell me about your project, question, or opportunity..." required></textarea>

        </div>

        <!-- BUTTON -->
        <div class="button-row">

          <button type="submit" class="btn btn-primary">
            Send Message
          </button>

        </div>

      </form>

    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
</style>