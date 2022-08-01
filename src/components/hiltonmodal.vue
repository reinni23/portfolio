<template>
  <router-link to="/">
    <div class="modal">
      <div class="mock-bg" @click="hiltonView = true">
        <img :src="hiltonmockup" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "app",
  hiltonView: false,
  data() {
    return {
      hiltonmockup: require("../assets/hiltonmockup.png"),
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.modal {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 30px;
  z-index: 200;
}
.mock-bg {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.mock-bg > img {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: block;
}
</style>
