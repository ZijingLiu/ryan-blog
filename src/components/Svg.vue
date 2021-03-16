<template>
  <svg :class="svg" aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String
    },
    svgClass: {
      type: String
    }
  },
  computed: {
    icon() {
      return `#icon-${this.iconName}`;
    },
    svg() {
      if (this.svgClass) {
        return `svg-icon ${this.svgClass}`;
      } else {
        return "svg-icon";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 30px;
  height: 30px;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}

.menu-icon {
  width: 30px;
  height: 40px;
}

.menu-item-icon {
  display: inline-block;
  position: absolute;
  top: 9px;
  left: 12px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0 10px;
}
</style>