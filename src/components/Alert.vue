<template>
  <transition :name="transitionName">
    <div v-if="showAlert" class="dv-alert" :class="`dv-alert__${position.toLowerCase()} dv-alert__${type.toLowerCase()}`">
      <p>{{ text }}</p>
      <p class="dv-alert-close" @click="closeAlert()">X</p>
    </div>
  </transition>
</template>

<script>
export default {
  // data: () => ({
  //   showAlertComponent: false
  // }),
  data: () => ({
    showAlert: false
  }),
  props: {
    position: {
      type: String,
      default: 'top',
      validator (position) {
        return ['top', 'bottom'].indexOf(position) > -1
      }
    },
    type: {
      type: String,
      default: 'error',
      validator (type) {
        return ['error', 'success', 'info', 'warning'].indexOf(type) > -1
      }
    },
    text: {
      type: String,
      default: 'This is a test error message'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeAlert () {
      this.showAlert = false
    }
  },
  computed: {
    transitionName () {
      return this.position.toLowerCase() === 'top' ? 'slide-down' : 'slide-up'
    }
  },
  watch: {
    show (show) {
      this.showAlert = show
    }
  }
  // methods: {
  //   closeAlert () {
  //     this.showAlertComponent = false
  //   }
  // },
  // computed: {
  //   showAlert () {
  //     return this.show
  //   },
  //   transitionName () {
  //     return this.position.toLowerCase() === 'top' ? 'slide-down' : 'slide-up'
  //   }
  // },
  // watch: {
  //   show (show) {
  //     console.log(show)
  //   },
  //   showAlert (show) {
  //     this.showAlertComponent = show
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .dv-alert {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 10px;
    border: 1px solid gray;
    border-radius: 5px;
    text-align: left;
    z-index: 200;
    p {
      margin: 0;
      &:nth-of-type(1) {
        flex: 1;
        padding: 10px;
      }
      &:nth-of-type(2) {
        padding: 10px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  .dv-alert__top {
    top: 10px;
  }
  .dv-alert__bottom {
    bottom: 10px;
  }

  .dv-alert__error {
    background-color: lightcoral;
  }
  .dv-alert__success {
    background-color: lightgreen;
  }
  .dv-alert__info {
    background-color: lightblue;
  }
  .dv-alert__warning {
    background-color: lightgoldenrodyellow;
  }

  .slide-down-enter-active, .slide-down-leave-active,
  .slide-up-enter-active, .slide-up-leave-active {
    transition: transform .25s ease;
  }
  .slide-down-enter, .slide-down-leave-to {
    transform: translateY(-150%);
  }
  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(150%);
  }
</style>
