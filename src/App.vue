<template>
  <v-app>
    <Navbar />
    <v-main>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Services />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import Qualifications from "./views/Qualifications.vue";
import Services from "./views/Services.vue";
import Contact from "./views/Contact.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Qualifications,
    Services,
    Contact
  },

  data: () => ({
    //
  }),
};
</script>
