<template>
  <div class="modal">
    <router-link to="/"
      ><div class="overlay" @click="kakaoView = true"></div>
    </router-link>
    <div class="kakao-card">
      <slot />
    </div>
  </div>
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
.kakao-card {
  position: relative;
  background: url(http://localhost:8080/img/hskakao.72b51d97.png) no-repeat;
  background-size: cover;
  width: 713px;
  height: 723px;
  top: 33%;
  z-index: 200;
  margin: auto;
  width: 300px;
  height: 300px;
}
@media only screen and (max-width: 768px) {
  .kakao-card {
    transform: scale(0.8);
  }
}
</style>
