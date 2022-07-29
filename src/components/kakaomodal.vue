<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="kakao-card">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
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
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.kakao-card {
  position: relative;
  max-width: 50%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background: url(../assets/hskakao.png);
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>
