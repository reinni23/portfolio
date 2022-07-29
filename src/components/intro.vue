<template>
  <div id="intro">
    <div class="letme">
      <p>프론트엔드 개발자를 지향하는</p>
      <p>신호승입니다.</p>
      <p>방문해주셔서 감사합니다.</p>
    </div>
    <div id="update">
      <p>Last Update : 22/07/28</p>
    </div>
    <div class="scrolldown">
      <img :src="require(`@/assets/arrow_drop_down_circle.png`)" />
    </div>
  </div>
</template>

<script>
export default { name: "app" };
</script>

<style scoped>
#intro {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 43.78%,
      rgba(238, 187, 195, 0) 100%
    ),
    #232946;
}
.letme {
  width: 100%;
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: right;
}
.letme > p {
  font-size: 36px;
  padding-right: 25px;
}
#update {
  position: absolute;
  top: 85%;
  left: 3%;
  color: #fff;
}
#update > p {
  font-weight: 400;
  font-size: 14px;
}
.scrolldown {
  width: 40px;
  height: 40px;
  margin: auto;
  padding-bottom: 50px;
}
@media only screen and (max-width: 768px) {
  .letme {
    height: 738px;
  }
  .letme > p {
    font-size: 24px;
  }
}
@media only screen and (max-width: 375px) {
  .letme {
    height: 650px;
  }
  .letme > p {
    font-size: 16px;
    padding-right: 15px;
  }
  #update {
    display: none;
  }
}
</style>
