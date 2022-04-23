<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Portfolio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/skills" class="nav-link">Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/experience" class="nav-link"
                >Experience</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link"
                >Portfolio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<style>
#navbarNav {
  margin-left: 400px;
}

.nav-item {
  padding-right: 40px;
}
.navbar-brand {
  padding-left: 50px;
}
</style>