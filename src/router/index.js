import { createRouter, createWebHistory } from "vue-router";
import intro from "../components/intro.vue";
import about from "../components/about.vue";
import webclone from "../components/webclone.vue";
import project from "../components/project.vue";
import contact from "../components/contact.vue";
import kakaomodal from "../components/kakaomodal.vue";
import hiltonmodal from "../components/hiltonmodal.vue";
import seomunmodal from "../components/seomunmodal.vue";

const routes = [
  {
    path: "/intro",
    name: "intro",
    component: intro,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/webclone",
    name: "webclone",
    component: webclone,
  },
  {
    path: "/project",
    name: "project",
    component: project,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/kakaomodal",
    name: "kakao",
    component: kakaomodal,
  },
  {
    path: "/hiltonmodal",
    name: "hiltonm",
    component: hiltonmodal,
  },
  {
    path: "/seomunmodal",
    name: "seomunm",
    component: seomunmodal,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
