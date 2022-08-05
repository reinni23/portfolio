<template>
  <div id="#contact">
    <div class="contact-wrap">
      <p data-aos="fade-up" data-aos-duration="1000">Contact</p>
      <div class="contact-info">
        <ul class="contact-icon" :key="clist" v-for="(cont, clist) in contlist">
          <li class="github" data-aos="fade-up" data-aos-duration="1000">
            <a :href="cont.github" target="_blank"
              ><img :src="cont.imggit"
            /></a>
          </li>
          <li class="insta" data-aos="fade-up" data-aos-duration="1000">
            <a :href="cont.insta" target="_blank"
              ><img :src="cont.imginsta"
            /></a>
          </li>
          <li class="email" data-aos="fade-up" data-aos-duration="1000">
            <a :href="cont.email"><img :src="cont.imgemail" /></a>
          </li>
          <li class="kakao" data-aos="fade-up" data-aos-duration="1000">
            <router-link to="/kakaomodal">
              <a> <img :src="cont.imgkakao" /> </a
            ></router-link>
          </li>
        </ul>
        <div class="contact-detail">
          <p data-aos="fade-up" data-aos-duration="1000">Tel. 010-3684-6218</p>
          <p data-aos="fade-up" data-aos-duration="1400">
            Email : reinni@naver.com
          </p>
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
          github: "https://github.com/reinni23",
          insta: "https://www.instagram.com/reinni23/",
          email: "mailto:reinni@naver.com",
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
  padding: 25% 0 30px;
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
  padding: 80px 15px;
}
.contact-icon > li {
  z-index: 100;
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
  padding-bottom: 300px;
}
.contact-detail > p {
  padding-bottom: 10px;
}

@media only screen and (max-width: 769px) {
  .contact-wrap {
    padding: 50% 0 50px;
  }
  .contact-wrap > p {
    font-size: 28px;
  }
  .contact-detail {
    font-size: 14px;
  }
}
@media only screen and (max-width: 375px) {
    .contact-wrap {
    padding: 25% 0 50px;
  }
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
  .contact-detail {
    padding-bottom: 100px;
  }
}
</style>
