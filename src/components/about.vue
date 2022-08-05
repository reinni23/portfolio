<template>
  <div class="aboutme backimg">
    <p data-aos="fade-up" data-aos-duration="1000">ABOUT ME</p>
    <div class="mypicture">
      <div
        class="circle c-left"
        data-aos="flip-right"
        data-aos-duration="1000"
      ></div>
      <div
        class="circle c-right"
        data-aos="flip-right"
        data-aos-duration="1000"
      ></div>
    </div>
    <div class="myletme" data-aos="fade-up" data-aos-duration="1000">
      <h2>꿈꾸는 개발자가 되고싶습니다.</h2>
      <p>
        물류전산, 유튜버 편집등 다양한 경험을 하다 개발자 친구들의 권유로 코딩을
        경험하고 흥미가 생겨 공부하게 되었습니다. 늦깎이 개발자이지만 열정을
        가지고 임하겠습니다.
      </p>
    </div>
    <div>
      <ul class="infolist">
        <li
          :key="i"
          v-for="(info, i) in infopage"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span class="material-icons md-light">
            {{ info.icon }}
          </span>
          <div class="sub_wrap">
            <p style="color: white">{{ info.page }}</p>
            <span>{{ info.sub1 }}</span>
            <span>{{ info.sub2 }}</span>
            <span>{{ info.sub3 }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="myskills">
      <p data-aos="fade-up" data-aos-duration="1000">Skills</p>
      <ul data-aos="fade-down" data-aos-duration="1000">
        <li :key="line" v-for="(skill, line) in skillper">
          <p class="skill-title">{{ skill.title }}</p>
          <div class="skill-graph">
            <div class="graph-per" :style="{ width: skill.percent }">
              <span>{{ skill.percent }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="cloud1 bg-size"
      data-aos="fade-right"
      data-aos-duration="800"
    ></div>
    <div
      class="cloud2 bg-size"
      data-aos="fade-left"
      data-aos-duration="800"
    ></div>
    <div
      class="rocket bg-size"
      data-aos="fade-up"
      data-aos-duration="800"
    ></div>
    <div
      class="jupiter bg-size"
      data-aos="fade-left"
      data-aos-duration="1000"
    ></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      infopage: [
        { icon: "person", page: "신호승" },
        { icon: "cake", page: "1991년 12월 18일" },
        { icon: "place", page: "서울 중구 신당동" },
        {
          icon: "work_outline",
          sub1: "두타면세점(16.5 ~ 17.4)",
          sub2: "용일프린팅(17.6 ~ 17.10)",
          sub3: "유튜브 편집(18.10 ~ 20.10)",
        },
        { icon: "call", page: "010-3684-6218" },
        { icon: "mail", page: "reinni@naver.com" },
        {
          icon: "school",
          page: "백제예술대학 졸업",
          sub1: "(영상디자인 전공)",
        },
        {
          icon: "emoji_events",
          page: "[디지털컨버전스]스마트뷰(vue)활용\n프론트엔드 웹개발자 양성과정  ",
          sub1: "(22. 2 ~ 22. 8) ",
        },
      ],
      skillper: [
        { title: "HTML/CSS", percent: "70%" },
        { title: "JavaScript", percent: "60%" },
        { title: "Vue.js", percent: "40%" },
        { title: "Node.js", percent: "50%" },
        { title: "MySql", percent: "50%" },
        { title: "PhotoShop", percent: "60%" },
        { title: "AfterEffect", percent: "70%" },
      ],
    };
  },
};
</script>

<style scoped>
.cloud1 {
  background: url(../assets/cloud1.png) no-repeat;
  position: absolute;
  width: 550px;
  height: 200px;
  left: -300px;
  top: 0;
}
.cloud2 {
  background: url(../assets/cloud2.png) no-repeat;
  position: absolute;
  width: 620px;
  height: 250px;
  right: -300px;
  top: 510px;
}
.rocket {
  background: url(../assets/rocket.png) no-repeat;
  position: absolute;
  width: 230px;
  height: 280px;
  left: -120px;
  top: 1200px;
}
.jupiter {
  background: url(../assets/jupiter.png) no-repeat;
  position: absolute;
  width: 160px;
  height: 105px;
  right: -80px;
  top: 1200px;
}
.aboutme {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.aboutme > p {
  padding: 80px 0;
}
.mypicture {
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
}
.circle {
  width: 355px;
  height: 355px;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.c-left {
  position: relative;
  left: 180px;
  background-color: #eebbc3;
  background-image: url(../assets/mypicture.png);
  background-size: cover;
  z-index: 150;
}
.c-right {
  position: relative;
  right: 110px;
  background-color: #fff;
}
.myletme {
  text-align: center;
  color: #fff;
  padding: 50px 0 80px;
}
.myletme > h2 {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
.myletme > p {
  max-width: 714px;
  margin: auto;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
}
.infolist {
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
}
.infolist > li {
  display: flex;
  justify-content: flex-start;
  width: 23%;
  height: 70px;
  white-space: pre-line;
  font-size: 16px;
  padding-bottom: 60px;
}
.md-light {
  padding-right: 40px;
}
.sub_wrap {
  display: flex;
  flex-direction: column;
}
.sub_wrap > span {
  font-size: 14px;
}
.myskills {
  max-width: 1400px;
  margin: auto;
  color: #fff;
  padding: 50px 0;
  z-index: 100;
  position: relative;
}
.myskills li {
  display: flex;
  text-align: center;
  padding: 10px 30px;
}
.myskills > p {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 60px;
}
.skill-title {
  width: 20%;
  font-size: 16px;
  font-weight: 500;
}
.skill-graph {
  width: 100%;
  height: 24px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
  text-align: right;
}
.graph-per > span {
  color: #000;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  position: relative;
  left: 50px;
}
.graph-per {
  background-color: #eebbc3;
  height: 100%;
  border-radius: 5px;
}
@media only screen and (max-width: 1200px) {
  .bg-size {
    transform: scale(0.6) !important;
  }
  .circle {
    width: 280px;
    height: 280px;
    transition: 0.3s ease-in-out;
  }
  .c-left {
    left: 145px;
  }
  .c-right {
    right: 75px;
  }
  .md-light {
    padding-right: 20px;
  }
}
@media only screen and (max-width: 768px) {
  .rocket {
    top: 1190px;
  }
  .bg-size {
    transform: scale(0.5) !important;
  }
  .circle {
    width: 240px;
    height: 240px;
  }
  .c-left {
    left: 105px;
  }
  .c-right {
    right: 80px;
  }
  .myletme {
    padding: 30px 20px;
  }
  .infolist > li {
    width: 40%;
    height: 100px;
    padding: 0 20px 10px;
    align-items: center;
  }
  .myskills {
    padding-bottom: 50px;
  }
  .myskills li {
    display: block;
  }
  .skill-title {
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
  }
}
@media only screen and (max-width: 415px) {
  .circle {
    width: 155px;
    height: 155px;
  }
  .c-left {
    left: 75px;
  }
  .c-right {
    right: 65px;
  }
  .myletme {
    padding: 30px 15px;
  }
  .infolist {
    box-sizing: border-box;
  }
  .infolist > li {
    width: 85%;
    height: 70px;
    padding: 0 15px 10px;
  }
}
</style>
