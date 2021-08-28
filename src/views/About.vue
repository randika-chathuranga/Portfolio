<template>
  <div class="about">
    <h1>About Me</h1>
    <h5>My Intoduction</h5>

    <div class="img02">
      <img src="./randika02.jpeg" alt="" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <h5>
            I am a developer working at TechZone world reputed company within 3
            years
          </h5>
        </div>

        <div class="w-100"></div>

        <div class="col">
          <v-card color="yellow" height="100px" width="150px">
            <v-card-text><b> 08+ years of experience </b></v-card-text>
          </v-card>
        </div>
        <div class="col">
          <v-card color="yellow" height="100px" width="150px">
            <v-card-text><b> 20+ Completed Projects </b></v-card-text>
          </v-card>
        </div>
        <div class="col">
          <v-card color="yellow" height="100px" width="150px">
            <v-card-text><b> 05+ Company Works </b></v-card-text>
          </v-card>
        </div>
        <div class="w-100"></div>

        <div class="col">
          <v-btn color="primary" class="ml-20 mt-7">Download CV</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.about {
  text-align: center;
}
h5 {
  padding-top: 0px;
}
.img02 {
  float: left;
  padding-top: 20px;
  padding-left: 50px;
}
.container {
  padding-top: 40px;
}
.col {
  padding-top: 20px;
}
</style>