<template>
  <button @click="emitClick" class="dv-button" :class="`
    ${buttonColor ? buttonColor : ''}
    ${icon ? 'icon' : ''}
    `">
    <slot v-if="!icon">Button</slot>
    <slot v-else><img :src="require('@/assets/sampleIcon.png')"></slot>
  </button>
</template>

<script>
export default {
  props: {
    primary: Boolean,
    dark: Boolean,
    orange: Boolean,
    success: Boolean,
    error: Boolean,
    icon: Boolean
  },
  methods: {
    emitClick (text) {
      this.$emit('click')
    }
  },
  computed: {
    colorList () {
      return [
        { primary: this.primary },
        { dark: this.dark },
        { orange: this.orange },
        { success: this.success },
        { error: this.error }
      ]
    },
    buttonColor () {
      const colorsSet = this.colorList.filter(function (color) {
        return Object.values(color)[0] === true
      })

      if (colorsSet.length === 1) {
        return Object.keys(colorsSet[0])[0]
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dv-button {
    --dark: #2D2D2D;
    --orange: #f8af5e;
    --darkorange: #e08b46;
    --blue: #5e8ff8;
    --darkblue: #4572d3;
    --green: #53d442;
    --darkgreen: #33a824;
    --red: #ff5252;
    --darkred: #da3737;
  }

  .dv-button {
    position: relative;
    margin: 0 1px;
    top: 0;
    padding: 5px 10px;
    border: 1px solid #AAA;
    border-radius: 5px;
    box-shadow: 0 1px 0 0 gray, 0 1px 0 0 #CCC;
    background-size: 100% 100%;
    background-color: #F5F5F5;
    font-family: 'Quicksand', sans-serif;
    font-size: .9em;
    font-weight: bold;
    transition: box-shadow .1s ease, top .1s ease;
    cursor: pointer;
    &:hover:not(:disabled) {
      box-shadow: 0 1px 0 0 gray, 0 1px 4px 2px #CCC;
    }
    &:focus {
      outline: none;
    }
    &:active {
      top: 1px;
      box-shadow: none !important;
    }
    &:disabled {
      cursor: default;
    }
  }

  .dark {
    color: white;
    background-color: var(--dark);
    &:disabled {
      color: rgba(255,255,255,.3);
    }
  }
  .orange {
    border-color: var(--darkorange);
    box-shadow: 0 1px 0 0 var(--darkorange), 0 0 0 0 #CCC;
    background-color: var(--orange);
    &:hover:not(:disabled) {
      box-shadow: 0 1px 0 0 var(--darkorange), 0 1px 4px 2px #CCC;
    }
  }
  .primary {
    border-color: var(--darkblue);
    box-shadow: 0 1px 0 0 var(--darkblue), 0 0 0 0 #CCC;
    background-color: var(--blue);
    &:hover:not(:disabled) {
      box-shadow: 0 1px 0 0 var(--darkblue), 0 1px 4px 2px #CCC;
    }
  }
  .success {
    border-color: var(--darkgreen);
    box-shadow: 0 1px 0 0 var(--darkgreen), 0 0 0 0 #CCC;
    background-color: var(--green);
    &:hover:not(:disabled) {
      box-shadow: 0 1px 0 0 var(--darkgreen), 0 1px 4px 2px #CCC;
    }
  }
  .error {
    border-color: var(--darkred);
    box-shadow: 0 1px 0 0 var(--darkred), 0 0 0 0 #CCC;
    background-color: var(--red);
    &:hover:not(:disabled) {
      box-shadow: 0 1px 0 0 var(--darkred), 0 1px 4px 2px #CCC;
    }
  }

  .icon {
    padding: 5px;
    border-radius: 50%;
    img {
      display: block;
      width: 16px;
      height: auto;
    }
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
