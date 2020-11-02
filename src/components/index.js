import Vue from 'vue'
import dvAlert from './Alert'
import dvButton from './Button'
import dvNavbar from './navigation/Navbar'

const Components = {
  dvAlert,
  dvButton,
  dvNavbar
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
