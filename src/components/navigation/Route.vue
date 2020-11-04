<template>
  <router-link :to="to" class="dv-route" :class="`${mainLink ? 'main-link' : ''}`">
    <slot>Route</slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    mainLink: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .dv-route {
    display: flex;
    align-self: stretch;
    place-items: center;
    padding: 0 8px;
    color: #2D2D2D;
    text-decoration: none;
    font-weight: bold;
    transition: box-shadow .25s ease;
    &.router-link-active:not(.main-link) {
      box-shadow: 0 -3px 0 0 inset #2D2D2D;
    }
    &:hover {
      box-shadow: 0 -5px 0 0 inset #2D2D2D;
    }
  }

  .main-link {
    &.router-link-exact-active {
      box-shadow: 0 -3px 0 0 inset #2D2D2D;
    }
  }
</style>
