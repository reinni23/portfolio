<template>
  <div class="aboutme backimg">
    <p>ABOUT ME</p>
    <div class="mypicture">
      <div class="circle c-left"></div>
      <div class="circle c-right"></div>
    </div>
    <div class="myletme">
      <h2>꿈꾸는 개발자가 되고싶습니다.</h2>
      <p>
        물류전산, 유튜버 편집등 다양한 경험을 하다 개발자 친구들의 권유로 코딩을
        경험하고 흥미가<br />
        생겨 공부하게 되었습니다. 늦깎이 개발자이지만 열정을 가지고
        임하겠습니다.
      </p>
    </div>
    <div>
      <ul class="infolist">
        <li :key="i" v-for="(info, i) in infopage">
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
      <p>Skills</p>
      <ul>
        <li :key="line" v-for="(skill, line) in skillper">
          <p class="skill-title">{{ skill.title }}</p>
          <div class="skill-graph">
            <div class="graph-per" :style="{ width: skill.percent }"></div>
            <span>{{ skill.percent }}</span>
          </div>
        </li>
      </ul>
    </div>
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
.aboutme > p {
  padding: 80px 0;
}
.mypicture {
  display: flex;
  justify-content: center;
  height: 100%;
}
.circle {
  width: 355px;
  height: 355px;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.c-left {
  position: relative;
  left: 100px;
  background-color: #eebbc3;
}
.c-right {
  position: relative;
  right: 100px;
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
  max-width: 700px;
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
  padding-bottom: 80px;
}
.myskills li {
  display: flex;
  justify-content: space-between;
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
  background-color: #fff;
  border-radius: 5px;
  text-align: right;
  display: flex;
  justify-content: space-between;
}
.skill-graph > span {
  color: #000;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  right: 10px;
}
.graph-per {
  background-color: #eebbc3;
  width: 50%;
  height: 100%;
  border-radius: 5px;
}
</style>
