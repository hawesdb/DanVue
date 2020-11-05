<template>
  <div id="app">
    <dv-alert
      :show="show"
      v-on:toggleAlert="toggleAlert"
      :text="alertText"
      :type="alertType"
      :position="alertPosition"
      :timeout="alertTimeout"/>
    <dv-navbar>
      <dv-route to="/" mainLink>DanielHawes</dv-route>
      <dv-route to="/Projects">Project</dv-route>
      <dv-route to="/About">About</dv-route>
    </dv-navbar>
    <router-view/>
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
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #998b8b;
}

#main-menu {
  height:48px;
  border: 1px solid lightgray;
}
</style>
