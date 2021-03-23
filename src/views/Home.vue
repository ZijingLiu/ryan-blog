<template>
  <div class="home container" ref="home">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in this.img" :key="index">
        <a
          :href="`${item.imgURL}`"
          :style="`background-image: url(${item.imgURL})`"
        ></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div ref="contentWrapper"><content-list></content-list></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ContentList from "../components/ContentList.vue";

export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
      img: [
        {
          imgURL:
            "https://y.gtimg.cn/music/common/upload/category_area/3606833.jpg?max_age=2592000",
        },
        {
          imgURL:
            "https://y.gtimg.cn/music/common/upload/category_area/1579265.png?max_age=2592000",
        },
        {
          imgURL:
            "https://y.gtimg.cn/music/common/upload/category_area/1674712.jpg?max_age=2592000",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ContentList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $color-theme-grey;
  .swiper {
    margin-top: 10px;
  }
}
</style>

<style lang="scss">
.swiper-container {
  border-radius: 3px;
  .swiper-wrapper {
    .swiper-slide {
      a {
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
      }
      a::after {
        content: "";
        display: block;
        padding-top: 150px;
      }
    }
  }
}
.swiper-pagination-bullet-active {
  background-color: $color-theme-white;
}
</style>

