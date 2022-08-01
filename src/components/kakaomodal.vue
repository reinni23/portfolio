<template>
  <router-link to="/">
    <div class="modal">
      <div class="overlay" @click="kakaoView = true"></div>
      <div class="kakao-card"><img src="../assets/hskakao.png" /></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "app",
  kakaoView: false,
};
</script>

<style scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.kakao-card > img {
  position: relative;
  top: 250px;
  display: block;
  z-index: 200;
  margin: auto;
  width: 300px;
  height: 300px;
}
@media only screen and (max-width: 768px) {
  .kakao-card > img {
    transform: scale(0.8);
  }
}
</style>
