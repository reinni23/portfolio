<template>
  <div class="clone backimg">
    <p>Web Clone</p>
    <ul class="clone-list">
      <li
        :key="list1"
        v-for="(clone, list1) in clonelist"
        class="cloneimg"
        v-on:click="setImg"
      >
        <img
          :src="clone.imgurl"
          width="100%"
          class="imgtab"
          :class="{ active: movecl }"
        />
        <div class="clone-title" :class="{ active: movecl }">
          <div class="clone-text">
            <h3>{{ clone.text }}</h3>
            <p class="make-time">제작기간 : {{ clone.time }}</p>
            <div class="clone-lang">
              <p :key="list2" v-for="(lang, list2) in clone.lang">
                {{ lang.id }}
              </p>
            </div>
          </div>
          <div class="clone-wrap">
            <p>{{ clone.title }}</p>
            <div class="clone-icon">
              <img>
              <img>
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
      movecl: false,
      clonelist: [
        {
          imgurl: require("../assets/flowerhouse.png"),
          title: "싱그러운집",
          text: "메인페이지와 커뮤니티 페이지를 작업하였습니다. 싱그러운집 클론을 통해 Swiper의 사용법과 HTML/CSS의 기초를 다졌습니다.",
          time: "22. 2 ~ 22. 4",
          lang: [{ id: "HTML/CSS" }, { id: "JavaScript" }, { id: "jQuery" }],
        },
        {
          imgurl: require("../assets/dcaf.png"),
          title: "대전문화회관",
          text: "메인페이지와 문화 문화예술공간-대전무형문화재 전수회관 페이지를 클론했습니다. HTML/CSS와 JS, jQuery를 공부하였습니다.",
          time: "22. 4 ~ 22. 5",
          lang: [{ id: "HTML/CSS" }, { id: "JavaScript" }, { id: "jQuery" }],
        },
        {
          imgurl: require("../assets/pollexzone.png"),
          title: "POLLEXZONE",
          text: "메인페이지와 회사소개 페이지를 클론했습니다. CSS의 동적 움직임과 JS를 이용한 메뉴 변환을 익혔습니다.",
          time: "22. 5 ~ 22. 6",
          lang: [{ id: "HTML/CSS" }, { id: "JavaScript" }, { id: "jQuery" }],
        },
      ],
    };
  },
  methods: {
    setImg() {
      this.movecl = !this.movecl;
    },
  },
};
</script>

<style scoped>
.clone > p {
  padding: 80px 0;
}
.clone-list {
  position: relative;
  width: 100%;
  max-height: 700px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 50px;
}
.cloneimg {
  text-align: center;
}
.cloneimg > img {
  width: 320px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  z-index: 1;
  position: relative;
}
.clone-title {
  width: 100%;
  max-width: 352px;
  height: 410px;
  padding: 110px 30px 30px;
  box-sizing: border-box;
  background-color: #eebbc3;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  color: #fff;
  text-align: center;
  transform: translateY(-75%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.clone-text {
  text-align: left;
}
.clone-text > h3 {
  padding-bottom: 20px;
}
.clone-wrap {
  box-sizing: border-box;
}
.clone-lang > p {
  width: max-content;
  background: #232946;
  border-radius: 5px;
  font-size: 14px;
  padding: 4px 6px;
  margin-bottom: 10px;
  margin-right: 5px;
}
.clone-lang {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.imgtab.active {
  transform: scale(0.8);
  transition: 0.3s ease-in-out;
}
.clone-title.active {
  height: 450px;
  transition: 0.3s ease-in-out;
  transform: translateY(-30%);
}
.make-time {
  padding-bottom: 10px;
}
</style>
