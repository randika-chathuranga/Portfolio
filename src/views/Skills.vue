<template>
  <div>
    <div class="topic">
      <h1>Skills</h1>
      <h5>My technical level</h5>
    </div>

    <div class="card">
      <v-card flat>
        <v-card-text class="head">
          <h3>Front End Developer</h3>
          <h5>More than 4 Years</h5>
        </v-card-text>

        <div class="per">
          <div>
            <h6>HTML</h6>
          </div>
          <div class="progress" style="width: 200px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>

          <div>
            <h6>Css</h6>
          </div>
          <div class="progress" style="width: 200px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 80%"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>

          <div>
            <h6>JavaScript</h6>
          </div>
          <div class="progress" style="width: 200px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>

          <div>
            <h6>React</h6>
          </div>
          <div class="progress" style="width: 200px">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 55%"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              55%
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "Skills",
};
</script>

<style>
.topic {
  text-align: center;
}

.card {
  width: 500px;
  margin-left: 50px;
}

.per {
  margin-left: 50px;
  padding: 20px;
}

.head {
  text-align: center;
}
</style>