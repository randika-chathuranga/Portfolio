<template>
  <v-app>
    <Navbar />
    <v-main>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import Experience from "./views/Experience.vue";
import Portfolio from "./views/Portfolio.vue";
import Contact from "./views/Contact.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Experience,
    Portfolio,
    Contact
  },

  data: () => ({
    //
  }),
};
</script>
