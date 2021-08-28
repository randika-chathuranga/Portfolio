<template>
  <div class="top">
    <div>
      <img src="./randika.jpg" alt="" />
    </div>
    <h1>Hi I'm Randika</h1>
    <h3>Frontend Developer</h3>

    <h5>
      I'm a frontend developer who works in Techzone world reputed company.
      <br />
      I am a expert in vue js framework using vuetify. <br />
      you can contact me in anytime.
    </h5>
    <v-btn color="primary" class="ml-20 mt-7">Contact Me</v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.top {
  margin-top: 70px;
  margin-left: 100px;
  font-family: "Kaisei HarunoUmi", serif;
}
h1 {
  padding-top: 50px;
}

h5 {
  padding-top: 40px;
}
img {
  margin-top: 0px;
  float: right;
  width: 400px;
  margin-right: 100px;
  height: 380px;
}
.img01 img {
  margin-top: 0px;
}
</style>
