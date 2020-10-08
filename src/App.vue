<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <dv-alert :show="show"/>
    <button @click="show = true">Press me</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    show: false
  }),
  mounted () {
    setTimeout(() => {
      this.showAlert(true)
    }, 1000)
  },
  methods: {
    showAlert (show) {
      this.show = show
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
