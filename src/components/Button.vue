<template>
  <button @click="emitClick" @mousedown="pulseColor" class="dv-button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  created () {
  },
  methods: {
    emitClick (text) {
      this.$emit('click')
    },
    pulseColor (event) {
      console.log(event)
      console.log(event.offsetX)
      console.log(event.offsetY)
      // event.target.style.backgroundImage = `radial-gradient(farthest-corner at ${event.offsetX}px ${event.offsetY}px, lightgray 0%, white 100%)`
      // event.target.style.backgroundSize = '500% 500%'
    }
  }
}
</script>

<style lang="scss" scoped>
  .dv-button {
    padding: 5px 10px;
    border: 1px solid #AAA;
    border-radius: 5px;
    box-shadow: 0 1px 0 0 gray, 0 0 0 0 inset gray;
    background-size: 100% 100%;
    background-color: #F5F5F5;
    font-family: 'Quicksand', sans-serif;
    font-size: .9em;
    font-weight: bold;
    transition: box-shadow .15s ease, background-size .5s ease;
    cursor: pointer;
    &:hover {
      box-shadow: 0 1px 0 0 gray, 0 0 0 0 inset gray, 0 2px 4px 2px lightgray;
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: 0 1px 0 0 gray, 0 0 50px 50px inset black;
    }
  }

  .clicked {

  }
</style>

<!--<template>
  <button @click="emitClick" class="dv-button" :class="`${ buttonColor ? buttonColor : ''}`">
    <div class="dv-button-content">
      <slot>Button</slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator (type) {
        return ['default', 'dark', 'blue', 'red', 'orange', 'green'].indexOf(type.toLowerCase()) > -1
      }
    }
  },
  methods: {
    emitClick (text) {
      this.$emit('click')
    }
  },
  computed: {
    buttonColor () {
      if (this.type && this.type.toLowerCase() !== 'default') {
        return `dv-button__${this.type.toLowerCase()}`
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
  .dv-button {
    place-self: center;
    position: relative;
    padding: 4px 10px;
    margin: 0 2px;
    top: 0px;
    border: 1px solid var(--darkgray);
    border-radius: 5px;
    color: var(--dark);
    background-color: white;
    box-shadow: 0 2px 0 0 var(--darkgray);
    font-family: 'Quicksand', sans-serif;
    font-size: .9em;
    font-weight: bold;
    transition: background-color .25s ease, top .1s ease, box-shadow .1s ease;
    cursor: pointer;
    &:hover:not(:disabled) {
      background-color: lightgray;
    }
    &:disabled {
      color: gray;
      background-color: #CCC;
      cursor: default;
    }
    &:focus {
      outline: none;
      background-color: lightgray;
    }
    &:active:not(:disabled) {
      top: 2px;
      box-shadow: none;
    }
  }

  .dv-button__dark {
    background-color: var(--dark);
    color: white;
    &:hover:not(:disabled) {
      background-color: #444;
    }
    &:disabled {
      background-color: #404040;
    }
    &:focus {
      background-color: #444;
    }
  }

  .dv-button__blue {
    background-color: var(--blue);
    color: white;
    &:hover:not(:disabled) {
      background-color: var(--darkblue);
    }
    &:disabled {
      background-color: #374e9b;
    }
    &:focus {
      background-color: var(--darkblue);
    }
  }

  .dv-button__red {
    background-color: var(--red);
    color: white;
    &:hover:not(:disabled) {
      background-color: var(--darkred);
    }
    &:disabled {
      background-color: #9b3737;
    }
    &:focus {
      background-color: var(--darkred);
    }
  }

  .dv-button__orange {
    background-color: var(--orange);
    &:hover:not(:disabled) {
      background-color: var(--darkorange);
    }
    &:disabled {
      color: darkgray;
      background-color: #9b6c37;
    }
    &:focus {
      background-color: var(--darkorange);
    }
  }

  .dv-button__green {
    background-color: var(--green);
    &:hover:not(:disabled) {
      background-color: var(--darkgreen);
    }
    &:disabled {
      color: #CCC;
      background-color: #379b3f;
    }
    &:focus {
      background-color: var(--darkgreen);
    }
  }
</style>-->
