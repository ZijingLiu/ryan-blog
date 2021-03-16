<template>
  <div id="app">
    <div class="app-wrapper">
      <div class="nav-wrapper">
        <Navbar></Navbar>
      </div>
      <keep-alive>
        <div class="content-wrapper" ref="content">
          <router-view />
        </div>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Navbar from "./components/Navbar"

BScroll.use(PullDown)

export default {
  components: {
    Navbar,
  },
  mounted: function() {
    this.$nextTick(() => {
      let contentWrapper = this.$refs.content
      let Bs = new BScroll(contentWrapper,{
        pullDownRefresh: true
      })
    })
  }
};
</script>


<style lang="scss">
#app {
  height: 100%;;
}
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  .nav-wrapper {
    flex: 0 0 auto;
  }
  .content-wrapper {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>
