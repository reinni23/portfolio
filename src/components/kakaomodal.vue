<template>
  <div class="modal">
    <router-link to="/"
      ><div class="overlay" @click="modalView = true"></div>
    </router-link>
    <div class="kakao-card">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  modalView: false,
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
  z-index: 200;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.kakao-card {
  position: relative;
  max-width: 700px;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  background: url(../assets/hskakao.png) no-repeat;
  height: 72%;
  z-index: 300;
  opacity: 1;
  transform: scale(0.5);
}
</style>
