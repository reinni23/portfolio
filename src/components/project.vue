<template>
  <div class="project backimg">
    <p>Project</p>
    <ul class="pr-list">
      <li
        :key="j"
        v-for="(pr, j) in prlist"
        class="primg"
        v-on:click="setProj(j)"
        data-aos="flip-right"
        data-aos-duration="1200"
      >
        <img :src="pr.imgurl" class="imgtab" />
        <div class="pr-title" :class="{ active: movepr[j] }">
          <div class="pr-wrap">
            <p>{{ pr.title }}</p>
            <ul class="pr-icon">
              <li class="page">
                <a :href="pr.page" target="_blank"><img :src="pr.imgtab" /></a>
              </li>
              <li class="mockup">
                <a :href="pr.mockup"><img :src="pr.imgmockup" /></a>
              </li>
              <li class="github">
                <a :href="pr.github" to="/hiltonmodal">
                  <img :src="pr.imggit"
                /></a>
              </li>
            </ul>
          </div>

          <div class="pr-text">
            <h3>{{ pr.text }}</h3>
            <p class="make-time">제작기간 : {{ pr.time }}</p>
            <div class="pr-lang">
              <p :key="list2" v-for="(lang, list2) in pr.lang">
                {{ lang.id }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="cloud4 bg-size"
      data-aos="fade-down"
      data-aos-duration="800"
    ></div>
    <div
      class="cloud5 bg-size"
      data-aos="fade-left"
      data-aos-duration="800"
    ></div>
    <div
      class="ufo bg-size"
      data-aos="fade-right"
      data-aos-duration="800"
    ></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      movepr: [false, false, false],
      prlist: [
        {
          imgurl: require("../assets/seomun.png"),
          title: "서문시장야시장",
          text: "시장소개, 공지사항, 회원가입 페이지를 제작했습니다. Node.js와 mySql을 통해 공지사항을 실시간으로 작성할 수 있고 회원가입 페이지는 유효성 검사를 통해 확인할 수 있게 했습니다. Heroku를 연동하여 실제로 공지사항을 작성할 수 있게 해두었습니다.",
          time: "22. 4 ~ 22. 7",
          lang: [
            { id: "HTML/CSS" },
            { id: "JavaScript" },
            { id: "jQuery" },
            { id: "Node.js" },
            { id: "mySql" },
          ],
          page: "https://seomuntest23.herokuapp.com",
          mockup: "/seomunmodal",
          github: "https://github.com/reinni23/seomun",
          imgtab: require("../assets/openpage.png"),
          imgmockup: require("../assets/device_icon.png"),
          imggit: require("../assets/github.png"),
        },
        {
          imgurl: require("../assets/hilton.png"),
          title: "힐튼 서울 호텔",
          text: "팀프로젝트 작업으로 해당 객실 및 객실 상세페이지 및 공지사항 일부를 작업했습니다. 공지사항은 mySql을 Heroku 연결을 통해 연동해두었으며 실시간으로 작성 및 보관할 수 있습니다. 또한 공지사항의 탭 구분에 따라 확인할 수 있게 했습니다. 해당 프로젝트의 25%정도를 기여했습니다.",
          time: "22.5 ~ 22.7",
          lang: [
            { id: "HTML/CSS" },
            { id: "JavaScript" },
            { id: "jQuery" },
            { id: "Node.js" },
            { id: "mySql" },
          ],
          page: "https://hs-hilton.herokuapp.com",
          mockup: "/hiltonmodal",
          github: "https://github.com/reinni23/hilton",
          imgtab: require("../assets/openpage.png"),
          imgmockup: require("../assets/device_icon.png"),
          imggit: require("../assets/github.png"),
        },
      ],
    };
  },
  methods: {
    setProj(j) {
      this.movepr[j] = !this.movepr[j];
    },
  },
};
</script>

<style scoped>
.project {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.project > p {
  padding: 100px 0;
}
.cloud4 {
  background: url(../assets/cloud4.png) no-repeat;
  position: absolute;
  width: 650px;
  height: 220px;
  left: -400px;
  top: 400px;
}
.cloud5 {
  background: url(../assets/cloud5.png) no-repeat;
  position: absolute;
  width: 650px;
  height: 200px;
  left: 80%;
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
.pr-list {
  position: relative;
  width: 100%;
  z-index: 100;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.primg {
  position: relative;
  width: 325px;
  height: 580px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  cursor: pointer;
}
.imgtab {
  width: 100%;
  height: 460px;
  transition: 0.4s 0.2s ease-in-out;
}
.pr-title {
  width: auto;
  height: 530px;
  position: relative;
  padding: 25px;
  background: #eebbc3;
  transition: 0.4s 0.2s ease-in-out;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pr-wrap > p {
  font-size: 18px;
  font-weight: bold;
}
.active {
  transform: translateY(-460px);
}
.pr-icon {
  display: flex;
  justify-content: space-around;
  padding: 20px 0 25px;
}
.pr-icon img {
  width: 30px;
  height: 30px;
}
.pr-text {
  text-align: start;
}

.pr-text > h3 {
  padding-bottom: 10px;
}
.make-time {
  padding: 10px 0 20px;
}
.pr-lang {
  flex-wrap: wrap;
  width: 100%;
  display: flex;
}
.pr-lang > p {
  font-size: 14px;
  background: #232946;
  border-radius: 5px;
  padding: 4px 6px;
  margin-bottom: 10px;
  margin-right: 5px;
}
@media only screen and (min-width: 768px) {
  .imgtab:hover ~ .pr-title {
    transform: translateY(-460px);
  }
  .pr-title:hover {
    transform: translateY(-460px);
  }
  .pr-icon > li > a :hover {
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
}
@media only screen and (max-width: 1000px) {
  .primg {
    width: 270px;
  }
}
@media only screen and (max-width: 768px) {
  .project > p {
    padding-bottom: 50px;
  }
  .pr-list {
    flex-direction: column;
  }
  .primg {
    width: 325px;
  }
  .pr-list > li {
    margin: 0 auto 40px;
  }
  .cloud4 {
    left: -300px;
    top: 450px;
  }
  .cloud5 {
    left: 33%;
    top: 800px;
  }

  .bg-size {
    transform: scale(0.6) !important;
  }
}
@media only screen and (max-width: 375px) {
  .pr-wrap > p {
    font-size: 15px;
  }
  .pr-icon img {
    width: 25px;
    height: 25px;
  }
  .pr-text {
    font-size: 14px;
  }
}
</style>
