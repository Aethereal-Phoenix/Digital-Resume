<template>
  <div class="contact-page">

    <!-- ========================= -->
    <!-- HERO                      -->
    <!-- ========================= -->
    <section class="hero">

      <p class="eyebrow">Contact</p>

      <h1>Let’s Connect</h1>

      <p class="hero-text">
        Questions, opportunities, collaborations, or project inquiries —
        feel free to send a message.
      </p>

    </section>

    <!-- ========================= -->
    <!-- CONTACT CARD              -->
    <!-- ========================= -->
    <section class="contact-wrapper">

      <form
        action="https://formsubmit.co/alex.sprague.webdesign@gmail.com"
        method="POST"
        class="contact-card"
      >

        <!-- FormSubmit Settings -->
        <input type="hidden" name="_captcha" value="false">

        <!-- NAME ROW -->
        <div class="row two-column">

          <div class="input-group">

            <label for="firstName">
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              pattern="[A-Za-z]+"
              title="First name cannot contain numbers."
              required
            >

          </div>

          <div class="input-group">

            <label for="lastName">
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              pattern="[A-Za-z]+"
              title="Last name cannot contain numbers."
              required
            >

          </div>

        </div>

        <!-- CONTACT ROW -->
        <div class="row two-column">

          <div class="input-group">

            <label for="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
            >

          </div>

          <div class="input-group">

            <label for="phone">
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              pattern="[0-9\-()\s]+"
              title="Phone number cannot contain letters."
            >

          </div>

        </div>

        <!-- MESSAGE -->
        <div class="input-group">

          <label for="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Tell me about your project, question, or opportunity..."
            required
          ></textarea>

        </div>

        <!-- BUTTON -->
        <div class="button-row">

          <button type="submit">
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

/* ========================= */
/* PAGE                      */
/* ========================= */

.contact-page {
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;

  padding: 3rem 1.5rem 5rem;

  box-sizing: border-box;
}

/* ========================= */
/* HERO                      */
/* ========================= */

.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  font-size: 0.78rem;
  font-weight: 600;

  opacity: 0.55;

  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;

  margin-bottom: 1.25rem;

  font-weight: 700;
}

.hero-text {
  max-width: 680px;

  margin: 0 auto;

  font-size: 1.05rem;
  line-height: 1.8;

  opacity: 0.72;
}

/* ========================= */
/* CONTACT WRAPPER           */
/* ========================= */

.contact-wrapper {
  width: 100%;

  display: flex;
  justify-content: center;
}

/* ========================= */
/* CONTACT CARD              */
/* ========================= */

.contact-card {
  width: 100%;
  max-width: 900px;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  padding: 2.75rem;

  border-radius: 24px;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(14px);

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.35);

  box-sizing: border-box;
}

/* ========================= */
/* ROWS                      */
/* ========================= */

.row {
  width: 100%;

  display: grid;

  gap: 1.5rem;

  box-sizing: border-box;
}

.two-column {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

/* ========================= */
/* INPUT GROUP               */
/* ========================= */

.input-group {
  width: 100%;

  display: flex;
  flex-direction: column;

  min-width: 0;
}

.input-group label {
  margin-bottom: 0.7rem;

  padding-left: 0.15rem;

  font-size: 0.8rem;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.06em;

  color: rgba(255, 255, 255, 0.62);
}

/* ========================= */
/* INPUTS                    */
/* ========================= */

input,
textarea {
  width: 100%;

  padding: 1rem 1.1rem;

  border-radius: 16px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  background: rgba(255, 255, 255, 0.05);

  color: white;

  font: inherit;

  box-sizing: border-box;

  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.32);
}

input:focus,
textarea:focus {
  outline: none;

  border-color: rgba(255, 255, 255, 0.28);

  background: rgba(255, 255, 255, 0.07);

  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.03),
    0 12px 30px rgba(0, 0, 0, 0.2);
}

textarea {
  resize: vertical;

  min-height: 150px;
}

/* ========================= */
/* BUTTON                    */
/* ========================= */

.button-row {
  display: flex;
  justify-content: flex-end;

  margin-top: 0.5rem;
}

button {
  border: none;

  padding: 1rem 1.8rem;

  min-width: 180px;

  border-radius: 14px;

  background: linear-gradient(
    135deg,
    #ffffff,
    #d9d9d9
  );

  color: black;

  font-size: 0.95rem;
  font-weight: 700;

  letter-spacing: 0.02em;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.25s ease;
}

button:hover {
  transform: translateY(-2px);

  opacity: 0.95;

  box-shadow:
    0 14px 30px rgba(255, 255, 255, 0.08);
}

button:active {
  transform: translateY(0);
}

/* ========================= */
/* MOBILE                    */
/* ========================= */

@media (max-width: 750px) {

  .contact-page {
    padding: 2rem 1rem 4rem;
  }

  .hero {
    margin-bottom: 3rem;
  }

  .contact-card {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .two-column {
    grid-template-columns: 1fr;
  }

  .button-row {
    justify-content: stretch;
  }

  button {
    width: 100%;
  }

}

</style>