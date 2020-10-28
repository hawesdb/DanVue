<template>
  <div id="app">
    <dv-alert
      :show="show"
      v-on:toggleAlert="toggleAlert"
      :text="alertText"
      :type="alertType"
      :position="alertPosition"
      :timeout="alertTimeout"/>
    <router-view/>
    <dv-button></dv-button>
    <dv-button icon></dv-button>
    <div style="position: absolute;padding: 20px; background-color: #2D2D2D">
      <dv-button dark></dv-button>
    </div>
    <dv-button orange></dv-button>
    <dv-button primary></dv-button>
    <dv-button success></dv-button>
    <dv-button error></dv-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    show: false,
    alertText: 'This an alert text! Please remain calm!',
    alertType: 'error',
    alertPosition: 'top',
    alertTimeout: '5s'
  }),
  methods: {
    toggleAlert (show) {
      this.show = show
    },
    changeAlert () {
      this.alertText = 'See this is not an issue'
      this.alertType = 'success'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #998b8b;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#light-background {
  display: flex;
  padding: 20px 10px;
  border: 1px solid var(--dark);
}
#dark-background {
  display: flex;
  padding: 20px 10px;
  border: 1px solid var(--dark);
  background-color: var(--dark);
}
</style>
