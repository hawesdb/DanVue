<template>
  <div class="dv-routes-container">
    <slot>Route List</slot>
    <div class="dv-routes-container-active"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeRoute: null
  }),
  created () {
    this.$on('set-route', this.moveIndicator)
  },
  methods: {
    moveIndicator (route) {
      console.log(`received emit for ${route}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dv-routes-container {
    display: flex;
  }
</style>
