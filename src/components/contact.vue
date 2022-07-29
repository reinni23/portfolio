<template>
  <div id="#contact">
    <div class="contact-wrap">
      <p>Contact</p>
      <div class="contact-info">
        <ul class="contact-icon" :key="clist" v-for="(cont, clist) in contlist">
          <li class="github">
            <a :href="cont.github" target="_blank"
              ><img :src="cont.imggit"
            /></a>
          </li>
          <li class="insta">
            <a :href="cont.insta" target="_blank"
              ><img :src="cont.imginsta"
            /></a>
          </li>
          <li class="email">
            <a :href="cont.email" target="_blank"
              ><img :src="cont.imgemail"
            /></a>
          </li>
          <li class="kakao">
            <a :href="cont.kakao" target="_blank"
              ><img :src="cont.imgkakao"
            /></a>
          </li>
        </ul>
        <div class="contact-detail">
          <p>Tel. 010-3684-6218</p>
          <p>Email : reinni@naver.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      contlist: [
        {
          github: "https://www.naver.com",
          insta: "https://www.naver.com",
          email: "https://www.naver.com",
          kakao: "https://www.naver.com",
          imggit: require("../assets/github.png"),
          imginsta: require("../assets/insta_logo.png"),
          imgemail: require("../assets/mail_icon.png"),
          imgkakao: require("../assets/kakao_logo.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
#contact {
  background-image: url(../assets/contact_background.png);
  background-size: cover;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.contact-wrap {
  box-sizing: border-box;
  text-align: center;
}
.contact-wrap > p {
  color: white;
  font-size: 36px;
  font-weight: bold;
  padding: 80px 0 120px;
}
.contact-info {
  text-align: center;
  margin: auto;
}
.contact-icon {
  max-width: 370px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
}
.contact-icon > li {
  z-index: 200;
}
.contact-icon img {
  width: 30px;
  height: 30px;
}
.contact-detail {
  color: #fff;
  font-size: 16px;
  max-width: 1440px;
  margin: auto;
  padding-bottom: 20%;
}
.contact-detail > p {
  padding-bottom: 10px;
}

@media only screen and (max-width: 768px) {
  .contact-wrap > p {
    font-size: 28px;
  }
  .contact-detail {
    font-size: 14px;
  }
}
@media only screen and (max-width: 375px) {
  .contact-wrap > p {
    font-size: 24px;
  }
  .contact-icon {
    max-width: 225px;
  }
  .contact-icon img {
    width: 25px;
    height: 25px;
  }
}
</style>
