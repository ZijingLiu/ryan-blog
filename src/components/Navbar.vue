<template>
  <header>
    <nav class="nav">
      <div class="container">
        <div class="nav-bar">
          <div class="menu-icon" @click="closeMenu">
            <svg-icon :iconName="`menu`" :svgClass="`menu-icon`"></svg-icon>
          </div>
          <div class="logo">
            <a><img src="../common/image/logo.png" alt="Zijing" /></a>
          </div>
          <div class="place-holder"></div>
        </div>
      </div>
      <transition name="pop-menu">
        <div class="menu" v-show="this.isMenuOpened">
          <div class="menu-inner">
            <ul>
              <router-link
                tag="li"
                v-for="route in this.routes"
                :key="route.index"
                :to="route.path"
                @click.native="closeMenu"
                active-class="route-active"
                exact
              >
                <template v-if="route.display">
                  <div class="menu-item">
                    <svg-icon
                      :iconName="route.icon"
                      :svgClass="`menu-item-icon`"
                    >
                    </svg-icon
                    >{{ route.name }}
                  </div>
                </template>
              </router-link>
            </ul>
          </div>
          <div class="menu-switch" @click="closeMenu">
            <svg-icon :iconName="`back`"></svg-icon>
          </div>
        </div>
      </transition>
      <transition name="pop-mask-layer">
        <div class="mask" v-show="this.isMenuOpened" @click="closeMenu"></div>
      </transition>
    </nav>
  </header>
</template>

<script>
import { setViewportHeight } from 'common/js/dom'
export default {
  data() {
    return {
      routes: this.$router.options.routes,
      isMenuOpened: false,
    };
  },
  methods: {
    closeMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
  }, 
  mounted: function() {
    this.$nextTick(() => {
      setViewportHeight('.menu')
    })
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  background-color: $color-theme-white;
  .container {
    .nav-bar {
      display: flex;
      justify-content: space-around;
      padding: 12px 0;
      .menu-icon {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .logo {
        a {
          display: inline-block;
          img {
            width: 160px;
            height: 40px;
            vertical-align: bottom;
            border: 1px solid #fff;
            border-radius: 5px;
          }
        }
      }
      .place-holder {
        width: 30px;
      }
    }
  }
  .menu {
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    z-index: 100;
    width: 280px;
    height: 100vh;
    background-color: $color-theme-white;
    border: 1px solid $color-theme-grey;
    border-radius: 6px;
    .menu-inner {
      padding: 100px 30px 0 30px;
      ul {
        li {
          position: relative;
          margin-bottom: 10px;
          .menu-item {
          position: relative;
          height: 20px;
          line-height: 20px;
          padding: 10px 0px 10px 60px;
          border: 1px solid $color-theme-white;
          border-radius: 6px;
          font-size: 15px;
          background-color: $color-theme-grey;
        }
        }
        
      }
    }
    .menu-switch {
      box-sizing: border-box;
      width: 70%;
      position: absolute;
      bottom: 50px;
      margin: 0 auto;
      text-align: center;
      border: 1px solid $color-theme-white;
      border-radius: 5px;
      background-color: $color-theme-grey;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }
  .mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background-color: $color-theme-grey;
  }
}

.route-active::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 100%;
  margin-left: 1px;
  background-color: $color-theme-blue;
  border: 1px solid $color-theme-grey !important;
  border-radius: 5px;
}

.pop-menu-enter,
.pop-menu-leave-to {
  transform: translateX(-400px);
}

.pop-menu-enter-to,
.pop-menu-leave {
  transform: translateX(0);
}

.pop-menu-enter-active,
.pop-menu-leave-active {
  transition: all 1s ease;
}

.pop-mask-layer-enter,
.pop-mask-layer-leave-to {
  opacity: 0;
}

.pop-mask-layer-enter-to,
.pop-mask-layer-leave {
  opacity: 1;
}

.pop-mask-layer-enter-active,
.pop-mask-layer-leave-active {
  transition: opacity 1s ease;
}
</style>