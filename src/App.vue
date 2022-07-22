<template>
  <div id="main">
    <nav>
      <ul>
        <li>HS</li>
        <li>ABOUT ME</li>
        <li>Web Clone</li>
        <li>Project</li>
        <li v-on:click="gotocontact">Contact</li>
      </ul>
    </nav>
       <div class="night">
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
    </div>
  </div>
   

  <intro></intro>
  <about></about>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
@import "./assets/reset.css";
@import "./assets/main.css";
</style>
