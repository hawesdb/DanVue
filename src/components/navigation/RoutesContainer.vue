<template>
  <div class="dv-routes-container">
    <slot>Route List</slot>
    <div class="dv-routes-container-active" :style="barCSS"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    initialUpdate: true,
    activeRoute: null,
    barX: null,
    barY: null,
    barWidth: null,
    barHeight: 0
  }),
  computed: {
    barCSS () {
      return {
        '--bar-left': this.barX,
        '--bar-top': this.barY,
        '--bar-width': this.barWidth,
        '--bar-height': this.barHeight
      }
    },
    routeElements () {
      var elements = []
      for (var i = 0; i < this.$el.childNodes.length; i++) {
        if (this.$el.childNodes[i].classList.contains('dv-route')) {
          elements.push(this.$el.childNodes[i])
        }
      }
      return elements
    }
  },
  mounted () {
    setTimeout(() => this.updateIndicator(), 50)
  },
  methods: {
    determineElement () {
      const path = window.location.pathname.split('/')
      for (var i = 0; i < this.routeElements.length; i++) {
        var href = this.routeElements[i].href.split('/')
        if ((path[1] === '' && href[3] === '') || (path[1] !== '' && href.indexOf(path[1]) > -1)) {
          return this.routeElements[i]
        }
      }
      return null
    },
    updateIndicator () {
      if (this.initialUpdate) this.initialUpdate = false
      var elem = this.determineElement()
      if (elem) {
        this.moveIndicator(elem)
      } else {
        this.toggleIndicator(false, elem)
      }
    },
    toggleIndicator (toggle, elem) {
      if (toggle) {
        this.barY = `${elem.top + elem.height}px`
      } else {
        this.barY = `${this.$el.getBoundingClientRect().y + this.$el.getBoundingClientRect().height + 5}px`
        this.barHeight = '0px'
        setTimeout(() => {
          this.barX = null
          this.barWidth = null
        }, 100)
      }
    },
    moveIndicator (elem) {
      var elemRect = elem.getBoundingClientRect()
      this.barWidth = `${elemRect.width}px`
      this.barHeight = '5px'
      this.barX = `${elemRect.left}px`
      this.toggleIndicator(true, elemRect)
    }
  },
  watch: {
    $route (to, from) {
      if (!this.initialUpdate) setTimeout(() => this.updateIndicator(), 50)
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
    height: var(--bar-height);
    left: var(--bar-left);
    top: var(--bar-top);
    background-color: black;
    transition: width .25s ease, height .1s ease, left .25s ease, top .1s ease;
  }
</style>
