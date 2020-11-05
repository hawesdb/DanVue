<template>
  <div class="site-icon">
    <slot>SITELINK</slot>
  </div>
</template>

<script>
export default {
  name: 'SiteLink'
}
</script>

<style lang="scss" scoped>
  .site-icon {
    place-self: center;
    display: flex;
    position: relative;
    height: 100%;
  }
</style>
