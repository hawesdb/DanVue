import Vue from 'vue'
import dvAlert from './Alert'

const Components = {
  dvAlert
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
