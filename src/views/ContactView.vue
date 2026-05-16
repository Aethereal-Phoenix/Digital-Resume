<!-- Component with my contact information and card to fill out -->
<template>
  <div class="page contact-page fade-up">
    <section class="section text-center">
      <h1>Let’s Connect</h1>

      <p class="page-subtitle text-center">
        Questions, opportunities, collaborations, or project inquiries —
        feel free to send a message.
      </p>

    </section>

    <!-- Contact card -->
    <section class="contact-wrapper">

      <!-- Where to send the forms data after it is submitted -->
      <form action="https://formsubmit.co/6e3b188ede6049622d2d41cb939c6ebc" method="POST" class="contact-card glass-card">

        <!-- FormSubmit Settings -->
        <input type="hidden" name="_captcha" value="false">

        <!-- Name row -->
        <div class="row two-column">

          <div class="input-group">

            <!-- First name input -->
            <label for="firstName">
              First Name
            </label>

            <!-- Will refuse inputs unless it is only letters -->
            <input type="text" id="firstName" name="firstName" placeholder="John" pattern="[A-Za-z]+"
              title="First name cannot contain numbers." required>

          </div>

          <div class="input-group">

            <!-- Last Name -->
            <label for="lastName">
              Last Name
            </label>

            <!-- WIll refuse input unless it is only letters -->
            <input type="text" id="lastName" name="lastName" placeholder="Doe" pattern="[A-Za-z]+"
              title="Last name cannot contain numbers." required>

          </div>

        </div>

        <!-- Contact info -->
        <div class="row two-column">

          <div class="input-group">

            <!-- Email -->
            <label for="email">
              Email
            </label>

            <input type="email" id="email" name="email" placeholder="example@email.com" required>

          </div>

          <div class="input-group">

            <!-- Phone number -->
            <label for="phone">
              Phone Number
            </label>

            <!-- Will only allow numbers and typical phone number dividers -->
            <input type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9\-()\s]+"
              title="Phone number cannot contain letters.">

          </div>

        </div>

        <!-- Message -->
        <div class="input-group">

          <!-- The message the user wishes to send me -->
          <label for="message">
            Message
          </label>

          <textarea id="message" name="message" rows="8"
            placeholder="Tell me about your project, question, or opportunity..." required></textarea>

        </div>

        <!-- The button to submit the form -->
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