<template>
  <div class="clone backimg">
    <p data-aos="fade-up" data-aos-duration="1000">Web Clone</p>
    <ul class="clone-list">
      <li
        :key="i"
        v-for="(clone, i) in clonelist"
        class="cloneimg"
        v-on:click="setImg(i)"
        data-aos="flip-right" data-aos-duration="1000"
      >
        <img :src="clone.imgurl" class="imgtab" />
        <div class="clone-title" :class="{ active: movecl[i] }">
          <div class="clone-wrap">
            <p>{{ clone.title }}</p>
            <ul class="clone-icon">
              <li class="page">
                <a :href="clone.page" target="_blank"
                  ><img :src="clone.imgtab"
                /></a>
              </li>
              <li class="github">
                <a :href="clone.github" target="_blank"
                  ><img :src="clone.imggit"
                /></a>
              </li>
            </ul>
          </div>
          <div class="clone-text">
            <h3>{{ clone.text }}</h3>
            <p class="make-time">제작기간 : {{ clone.time }}</p>
            <div class="clone-lang">
              <p :key="list2" v-for="(lang, list2) in clone.lang">
                {{ lang.id }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="cloud3" data-aos="fade-right" data-aos-duration="800"></div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      movecl: [false, false, false],
      clonelist: [
        {
          imgurl: require("../assets/flowerhouse.png"),
          title: "싱그러운집",
          text: "메인페이지와 커뮤니티 페이지를 작업하였습니다. 싱그러운집 클론을 통해 반응형(미디어쿼리)의 이해와 Swiper의 사용법, 그리고 HTML/CSS의 기초를 다졌습니다.",
          time: "22. 2 ~ 22. 4",
          lang: [{ id: "HTML/CSS" }, { id: "JavaScript" }, { id: "jQuery" }],
          page: "https://reinni23-flowerhouse.netlify.app/",
          github: "https://github.com/reinni23/flower1",
          imgtab: require("../assets/openpage.png"),
          imggit: require("../assets/github.png"),
        },
        {
          imgurl: require("../assets/dcaf.png"),
          title: "대전문화회관",
          text: "메인페이지 및 문화예술공간-대전무형문화재 전수회관 페이지를 클론했습니다. HTML/CSS, JavaScript의 기본적인 사용법과 jQuery의 사용법을 익혔습니다.",
          time: "22. 4 ~ 22. 5",
          lang: [{ id: "HTML/CSS" }, { id: "JavaScript" }, { id: "jQuery" }],
          page: "https://reinni23-dcaf.netlify.app/",
          github: "https://github.com/reinni23/dcaf",
          imgtab: require("../assets/openpage.png"),
          imggit: require("../assets/github.png"),
        },
        {
          imgurl: require("../assets/pollexzone.png"),
          title: "POLLEXZONE",
          text: "메인페이지와 회사소개 페이지를 클론했습니다. CSS의 동적 움직임과 JS를 이용한 메뉴 변환을 익혔습니다. 또한 JavaScript의 라이브러리 사용법을 익혔습니다.",
          time: "22. 5 ~ 22. 6",
          lang: [{ id: "HTML/CSS" }, { id: "JavaScript" }, { id: "jQuery" }],
          page: "https://reinni23-pollexzone.netlify.app",
          github: "https://github.com/reinni23/pollexzone",
          imgtab: require("../assets/openpage.png"),
          imggit: require("../assets/github.png"),
        },
      ],
    };
  },
  methods: {
    setImg(i) {
      this.movecl[i] = !this.movecl[i];
    },
  },
};
</script>

<style scoped>
.cloud3 {
  background: url(../assets/cloud3.png) no-repeat;
  position: absolute;
  width: 500px;
  height: 300px;
  left: 280px;
  top: 540px;
}
.clone {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.clone > p {
  padding-bottom: 80px;
}
.clone-list {
  position: relative;
  width: 100%;
  z-index: 100;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.cloneimg {
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
  background-size: auto;
}
.clone-title {
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
.clone-wrap > p {
  font-size: 18px;
  font-weight: bold;
}
.active {
  transform: translateY(-460px);
}
.clone-icon {
  display: flex;
  justify-content: space-around;
  padding: 15px 0 25px;
}
.clone-icon img {
  width: 30px;
  height: 30px;
}
.clone-text {
  text-align: start;
}
.clone-text > h3 {
  padding-bottom: 10px;
}
.make-time {
  padding: 10px 0 20px;
}
.clone-lang {
  flex-wrap: wrap;
  width: 100%;
  display: flex;
}
.clone-lang > p {
  font-size: 14px;
  background: #232946;
  border-radius: 5px;
  padding: 4px 6px;
  margin-bottom: 10px;
  margin-right: 5px;
}
@media only screen and (min-width: 768px) {
  .imgtab:hover ~ .clone-title {
    transform: translateY(-460px);
  }
  .clone-title:hover {
    transform: translateY(-460px);
  }
  .clone-icon > li > a :hover {
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
}
@media only screen and (max-width: 1000px) {
  .cloneimg {
    width: 270px;
  }
}
@media only screen and (max-width: 768px) {
  .clone > p {
    padding-bottom: 50px;
  }
  .clone-list {
    flex-direction: column;
  }
  .cloneimg {
    width: 325px;
  }
  .clone-list > li {
    margin: 0 auto 40px;
  }
}
@media only screen and (max-width: 375px) {
  .clone-wrap > p {
    font-size: 15px;
  }
  .clone-icon img {
    width: 25px;
    height: 25px;
  }
  .-text {
    font-size: 14px;
  }
}
</style>
