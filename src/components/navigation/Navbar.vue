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
    position: relative;
    min-height: 42px;
    padding: 5px 5px 0;
    border-bottom: 2px solid lightgray;
    box-shadow: 0 1px 4px 1px lightgray;
    text-align: left;
  }
</style>
