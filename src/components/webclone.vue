<template>
  <div class="clone backimg">
    <p>Web Clone</p>
  </div>
  <ul class="clone-list">
    <li>
      <img src="#" />
      <div>
        <p>싱그러운집</p>
        <div>
          <span>아이콘1</span>
          <span>아이콘2</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default { name: "app" };
</script>

<style scoped>
.clone > p {
  padding: 80px 0;
}
.clone-list {
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
</style>
