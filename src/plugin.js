import directive from './directive'

export default (Vue) => {
  Vue.directive('safe', directive)
}
