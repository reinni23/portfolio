<template>
  <div class="modal">
    <router-link to="/"
      ><div class="overlay" @click="hiltonView = true"></div>
    </router-link>
    <div class="hilton-card"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  hiltonView: false,
};
</script>

<style scoped>
.modal,
.overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.hilton-card {
  width: 75%;
  height: 100%;
  background: url(../assets/hiltonmockup.png) no-repeat;
  background-size: cover;
  z-index: 200;
  margin: auto;
}
@media only screen and (max-width: 768px) {
  .hilton-card {
    transform: scale(0.8);
  }
}
</style>
