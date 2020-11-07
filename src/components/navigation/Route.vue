<template>
  <router-link :to="to" class="dv-route" :style="cssVars" :class="`
    ${mainLink ? 'dv-main-link' : ''}
    ${stretch ? 'dv-stretch' : ''}
    `" @click.native="setRoute">
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
  },
  computed: {
    cssVars () {
      return {
        '--hover-color': this.hoverColor,
        '--active-color': this.activeColor
      }
    }
  },
  methods: {
    setRoute () {
      console.log(`route set to ${this.to}`)
      this.$parent.$emit('set-route', this)
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
    padding: 0 8px;
    color: #2D2D2D;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    transition: box-shadow .25s ease;
    &:not(.dv-main-link) {
      &.router-link-active {
        // box-shadow: 0 5px 0 0 var(--active-color) !important;
      }
      &:hover {
        // box-shadow: 0 8px 0 0 var(--hover-color);
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
