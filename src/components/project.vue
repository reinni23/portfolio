<template>
  <div class="project backimg">
    <p>Project</p>
    <ul class="pr-list">
      <li
        :key="list2"
        v-for="(pr, list2) in prlist"
        class="primg"
        v-on:click="setProj"
      >
        <img
          :src="pr.imgurl"
          width="100%"
          class="imgtab"
          :class="{ active: movepr }"
        />
        <div class="pr-title" :class="{ active: movepr }">
          <div class="pr-text">
            <h3>{{ pr.text }}</h3>
            <div class="pr-lang">
              <p>{{ pr.lang }}</p>
            </div>
          </div>
          <div class="pr-wrap">
            <p>{{ pr.title }}</p>
            <div class="pr-icon">
              <a>1</a>
              <a>2</a>
              <a>3</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      movepr: false,
      prlist: [
        {
          imgurl: require("../assets/seomun.png"),
          title: "서문시장야시장",
          text: "시장소개, 공지사항, 회원가입 페이지를 제작했습니다. Node.js와 mySql을 통해 공지사항을 실시간으로 작성할 수 있고 회원가입 페이지는 유효성 검사를 통해 확인할 수 있게 했습니다.",
          lang: "html/css",
        },
        {
          imgurl: require("../assets/hilton.png"),
          title: "힐튼 서울 호텔",
          text: "팀프로젝트 작업으로 해당 객실 및 객실 상세페이지를 작업했습니다. 공지사항은 mySql을 통해 실시간으로 작성할 수 있고 공지사항의 탭 구분에 따라 확인할 수 있게 했습니다. 전체의 25%정도를 기여했습니다.",
          lang: "html/css",
        },
      ],
    };
  },
  methods: {
    setProj() {
      this.movepr = !this.movepr;
    },
  },
};
</script>

<style scoped>
.project > p {
  padding: 80px 0;
}
.pr-list {
  position: relative;
  width: 100%;
  max-height: 700px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 50px;
}
.primg {
  text-align: center;
}
.primg > img {
  width: 320px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  z-index: 1;
  position: relative;
}
.pr-title {
  width: 100%;
  max-width: 352px;
  height: 460px;
  padding: 110px 30px 30px;
  box-sizing: border-box;
  background-color: #eebbc3;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  color: #fff;
  text-align: center;
  transform: translateY(-80%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pr-text {
  text-align: left;
}
.pr-text > h3 {
  padding-bottom: 15px;
}
.pr-wrap {
  box-sizing: border-box;
}
.pr-lang > p {
  width: max-content;
  background: #232946;
  border-radius: 5px;
  font-size: 14px;
  padding: 4px 6px;
  margin-bottom: 10px;
  margin-right: 5px;
}
.pr-lang {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.imgtab.active {
  transform: scale(0.8);
  transition: 0.3s ease-in-out;
}
.pr-title.active {
  height: 450px;
  transition: 0.3s ease-in-out;
  transform: translateY(-30%);
}
</style>
