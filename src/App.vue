<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <dv-alert
      :show="show"
      v-on:toggleAlert="toggleAlert"
      :text="alertText"
      :type="alertType"
      :position="alertPosition"
      timeout="1m"/>
    <button @click="toggleAlert(true)">Press me</button>
    <button @click="changeAlert">Change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    show: false,
    alertText: 'This an alert text! Please remain calm!',
    alertType: 'error',
    alertPosition: 'top'
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
</style>
