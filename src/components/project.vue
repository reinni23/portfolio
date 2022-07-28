<template>
  <div class="project backimg">
    <p>Project</p>
    <ul class="pr-list">
      <li
        :key="list1"
        v-for="(pr, list1) in prlist"
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
            <p class="make-time">제작기간 : {{ pr.time }}</p>
            <div class="pr-lang">
              <p :key="list2" v-for="(lang, list2) in pr.lang">
                {{ lang.id }}
              </p>
            </div>
          </div>
          <div class="pr-wrap">
            <p>{{ pr.title }}</p>
            <ul class="pr-icon">
              <li class="page">
                <a :href="pr.page"><img :src="pr.imgtab" /></a>
              </li>
              <li class="mockup">
                <a :href="pr.mockup"><img :src="pr.imgmockup" /></a>
              </li>
              <li class="github">
                <a :href="pr.github"><img :src="pr.imggit" /></a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="cloud4"></div>
    <div class="cloud5"></div>
    <div class="ufo"></div>
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
          time: "22. 4 ~ 22. 7",
          lang: [
            { id: "HTML/CSS" },
            { id: "JavaScript" },
            { id: "jQuery" },
            { id: "Node.js" },
            { id: "mySql" },
          ],
          page: "https://www.naver.com",
          mockup: "https://www.naver.com",
          github: "https://www.naver.com",
          imgtab: require("../assets/openpage.png"),
          imgmockup: require("../assets/device_icon.png"),
          imggit: require("../assets/github.png"),
        },
        {
          imgurl: require("../assets/hilton.png"),
          title: "힐튼 서울 호텔",
          text: "팀프로젝트 작업으로 해당 객실 및 객실 상세페이지를 작업했습니다. 공지사항은 mySql을 통해 실시간으로 작성할 수 있고 공지사항의 탭 구분에 따라 확인할 수 있게 했습니다. 전체의 25%정도를 기여했습니다.",
          time: "22.5 ~ 22.6",
          lang: [
            { id: "HTML/CSS" },
            { id: "JavaScript" },
            { id: "jQuery" },
            { id: "Node.js" },
            { id: "mySql" },
          ],
          page: "https://www.naver.com",
          mockup: "https://www.naver.com",
          github: "https://www.naver.com",
          imgtab: require("../assets/openpage.png"),
          imgmockup: require("../assets/device_icon.png"),
          imggit: require("../assets/github.png"),
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
.cloud4 {
  background: url(../assets/cloud4.png) no-repeat;
  position: absolute;
  width: 650px;
  height: 200px;
  left: 85px;
  top: 400px;
}
.cloud5 {
  background: url(../assets/cloud5.png) no-repeat;
  position: absolute;
  width: 650px;
  height: 200px;
  left: 1120px;
  top: 50px;
}
.ufo {
  background: url(../assets/ufo.png) no-repeat;
  position: absolute;
  width: 120px;
  height: 80px;
  left: -36px;
  top: 67px;
}
.project {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.project > p {
  padding-bottom: 80px;
}
.pr-list {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 100;
}
.primg {
  text-align: center;
  cursor: pointer;
}
.primg > img {
  max-width: 320px;
  width: 100%;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  z-index: 1;
  position: relative;
}
.pr-title {
  width: 100%;
  max-width: 352px;
  height: 500px;
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
  height: 495px;
  transition: 0.3s ease-in-out;
  transform: translateY(-30%);
}
.make-time {
  padding-bottom: 10px;
}
.pr-wrap {
  box-sizing: border-box;
}
.pr-wrap > p {
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 10px;
}
.pr-icon {
  display: flex;
  justify-content: space-around;
}
.pr-icon img {
  width: 30px;
  height: 30px;
}
</style>
