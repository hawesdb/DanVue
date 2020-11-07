<template>
  <div class="dv-routes-container">
    <slot>Route List</slot>
    <div class="dv-routes-container-active" :style="barCSS"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeRoute: null,
    barX: null,
    barY: null,
    barWidth: null
  }),
  computed: {
    barCSS () {
      return {
        '--bar-left': this.barX,
        '--bar-top': this.barY,
        '--bar-width': this.barWidth
      }
    }
  },
  created () {
    this.$on('set-route', this.moveIndicator)
  },
  methods: {
    moveIndicator (route) {
      var clickedElem = route.$el.getBoundingClientRect()
      console.log(clickedElem.left)
      this.barWidth = `${clickedElem.width}px`
      this.barX = `${clickedElem.left}px`
      this.barY = `${clickedElem.top + clickedElem.height}px`
    }
  }
}
</script>

<style lang="scss" scoped>
  .dv-routes-container {
    display: flex;
  }
  .dv-routes-container-active {
    position: absolute;
    width: var(--bar-width);
    height: 5px;
    left: var(--bar-left);
    top: var(--bar-top);
    background-color: black;
    transition: width .25s ease, left .25s ease;
  }
</style>
