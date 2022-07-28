<template>
  <div id="main">
    <!-- <nav class="navbar">
      <div class="nav-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p v-on:click="gotointro">HS</p>
      <ul class="nav-menu">
        <li v-on:click="gotoabout">ABOUT ME</li>
        <li v-on:click="gotowcl">Web Clone</li>
        <li v-on:click="gotopr">Project</li>
        <li v-on:click="gotocontact">Contact</li>
      </ul>
    </nav> -->
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
  <webclone id="webclone"></webclone>
  <project id="project"></project>
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
    gotowcl() {
      const clone = document.getElementById("webclone");
      if (clone) {
        clone.scrollIntoView({ behavior: "smooth" });
      }
    },
    gotopr() {
      const project = document.getElementById("project");
      if (project) {
        project.scrollIntoView({ behavior: "smooth" });
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
.nav-burger {
  display: none;
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
  z-index: 200;
}
.navbar > p {
  font-size: 32px;
  cursor: pointer;
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
  position: relative;
  width: 100px;
  line-height: 30px;
  margin: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
}

.nav-menu li::after {
  position: absolute;
  content: "";
  display: block;
  border-bottom: 3px solid #eebbc3;
  transition: width 250ms ease-out;
  left: auto;
  right: 0;
  width: 0;
}
.nav-menu li:hover::after {
  width: 100%;
  left: 0;
  right: auto;
}
@media only screen and (max-width: 1200px) {
  .navbar {
    padding: 0 30px;
  }
  .navbar li {
    width: 90px;
    margin: 0 15px;
  }
}
@media only screen and (max-width: 768px) {
  .navbar {
    padding: 0 15px;
    line-height: 50px;
  }
  .navbar > p {
    font-size: 24px;
  }
  .navbar li {
    width: 70px;
    font-size: 12px;
    margin: 0 10px;
  }
}
@media only screen and (max-width: 410px) {
  .nav-burger {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    right: 15px;
    top: 15px;
  }
  .nav-burger > span {
    display: block;
    width: 100%;
    height: 3px;
    background: #fff;
  }
  .navbar {
    background: #121629;
    /* height: 100%; */
    display: block;
    padding: 5px 30px 0;
  }
  .navbar > ul {
    flex-direction: column;
    height: 75%;
  }
  .navbar li {
    margin: auto;
  }
}
</style>
