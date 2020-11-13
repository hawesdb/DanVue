<template>
  <router-link :to="to" class="dv-route" :class="`
    ${mainLink ? 'dv-main-link' : ''}
    ${stretch ? 'dv-stretch' : ''}
    `">
    <slot>Route</slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    mainLink: Boolean,
    stretch: Boolean,
    hoverColor: {
      type: String,
      default: '#e08b46'
    },
    activeColor: {
      type: String,
      default: '#f8af5e'
    }
  }
}
</script>

<style lang="scss" scoped>
  .dv-route {
    --orange: #f8af5e;
    --darkorange: #e08b46;
  }

  .dv-route {
    display: flex;
    align-self: stretch;
    place-items: center;
    justify-content: center;
    position: relative;
    padding: 0 8px;
    color: #2D2D2D;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    transition: box-shadow .25s ease, background-color 1s ease;
    &:not(.dv-main-link) {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: -5px;
        right: 0;
        bottom: -5px;
        background-color: rgba(0,0,0,0);
        transition: background-color .25s ease;
      }
      &:hover:after {
        background-color: rgba(0,0,0,.05);
      }
    }
  }

  .dv-main-link {
    font-size: 1.5em;
  }

  .dv-stretch {
    flex: 1;
  }
</style>
