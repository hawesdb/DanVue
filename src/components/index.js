import Vue from 'vue'
import dvAlert from './Alert'
import dvButton from './Button'

const Components = {
  dvAlert,
  dvButton
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
