<template>
  <div class="project backimg">
    <p>Project</p>
  <ul class="pr-list">
    <li>
      <div>이미지</div>
      <div>
        <p>서문시장야시장</p>
        <div>
          <span>아이콘1</span>
          <span>아이콘2</span>
          <span>아이콘3</span>
        </div>
      </div>
    </li>
  </ul>
    </div>
</template>

<script>
export default { name: "app" };
</script>

<style scoped>
.project > p {
  padding: 80px 0;
}
.pr-list {
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
</style>
