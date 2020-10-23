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
      default: 'This is a test error message',
      required: true
    },
    show: {
      type: Boolean,
      default: false
    },
    timeout: {
      type: String,
      validator (timeout) {
        var timeType = timeout.substring(timeout.length - 1)
        return ['s', 'm'].indexOf(timeType.toLowerCase()) > -1
      }
    }
  },
  methods: {
    closeAlert () {
      this.showAlert = false
      this.$emit('toggleAlert', false)
    },
    openAlert () {
      this.showAlert = true
      this.$emit('toggleAlert', true)
    },
    reopenAlert () {
      if (this.showAlert) {
        this.closeAlert()
        setTimeout(() => {
          this.openAlert()
        }, 250)
      }
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
    },
    showAlert (ifShow) {
      if (ifShow && this.timeout) {
        var time = parseInt(this.timeout, 10)
        const timeType = this.timeout.substring(this.timeout.length - 1).toLowerCase()
        switch (timeType) {
          case 's':
            time *= 1000
            break
          case 'm':
            time *= 1000 * 60
            break
        }

        setTimeout(() => {
          this.closeAlert()
        }, time)
      }
    },
    text (text) {
      this.reopenAlert()
    },
    type (type) {
      this.reopenAlert()
    },
    position (type) {
      this.reopenAlert()
    }
  }
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
    box-shadow: 2px 2px 3px 2px #DDDDDDCC;
    text-align: left;
    z-index: 200;
    p {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      &:nth-of-type(1) {
        flex: 1;
        padding: 10px;
      }
      &:nth-of-type(2) {
        padding: 10px;
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
    background-color: #ffa8a8;
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
    transform: translateY(-125%);
  }
  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(125%);
  }
</style>
