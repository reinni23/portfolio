<template>
  <div id="main">
    <nav class="navbar">
      <p v-on:click="gotointro">HS</p>
      <ul>
        <li v-on:click="gotoabout">ABOUT ME</li>
        <li>Web Clone</li>
        <li>Project</li>
        <li v-on:click="gotocontact">Contact</li>
      </ul>
    </nav>
    <!-- <div class="night">
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
    </div> -->
  </div>

  <intro id="intro"></intro>
  <about id="about"></about>
  <webclone></webclone>
  <project></project>
  <contact id="contact"></contact>
  <router-view></router-view>
</template>

<script>
import intro from "./components/intro.vue";
import about from "./components/about.vue";
import webclone from "./components/webclone.vue";
import project from "./components/project.vue";
import contact from "./components/contact.vue";

export default {
  name: "app",
  methods: {
    gotointro() {
      const intro = document.getElementById("intro");
      if (intro) {
        intro.scrollIntoView({ behavior: "smooth" });
      }
    },
    gotoabout() {
      const about = document.getElementById("about");
      if (about) {
        about.scrollIntoView({ behavior: "smooth" });
      }
    },
    gotocontact() {
      const contact = document.getElementById("contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  components: { intro, about, webclone, project, contact },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
@import "./assets/reset.css";
@import "./assets/star.css";

.backimg {
  background: #232946;
}
.backimg > p {
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}
.navbar {
  width: 100%;
  height: 52px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 50px;
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
}
.navbar > p {
  font-size: 32px;
}
.navbar > ul {
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}
.navbar li {
  width: 100px;
  line-height: 30px;
  margin: 0 20px;
  box-sizing: border-box;
}
</style>
