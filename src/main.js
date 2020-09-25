import waves from './directive/waves'

const install = function(Vue) {
  Vue.directive('waves', waves)
}

if (window.Vue) {
  window.waves = waves
  window.Vue.use(install)
}

waves.install = install
export default waves
