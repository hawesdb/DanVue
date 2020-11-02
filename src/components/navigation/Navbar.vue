<template>
  <div class="dv-navbar">
    <slot>Navbar</slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .dv-navbar {
    display: flex;
    padding: 5px;
    min-height: 38px;
    text-align: left;
  }
</style>
