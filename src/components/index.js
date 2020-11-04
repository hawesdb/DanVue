import Vue from 'vue'
import dvAlert from './Alert'
import dvButton from './Button'
import dvNavbar from './navigation/Navbar'
import dvRoute from './navigation/Route'

const Components = {
  dvAlert,
  dvButton,
  dvNavbar,
  dvRoute
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
