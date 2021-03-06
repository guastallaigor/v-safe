function getValue(el, binding, vnode) {
  var expression = binding.expression.replace(/['"]+/g, '')

  if (expression && (expression.indexOf('.') > -1)) {
    var splitted = expression.split('.')
    var returned = null

    for (var index = 0; index < splitted.length; index++) {
      var element = splitted[index]

      returned = !returned ? vnode.context[element] : returned[element]

      if (typeof returned !== 'object') {
        break
      }
    }

    el.innerHTML = ((returned !== undefined) && (returned !== null))
      ? String(returned)
      : ''
  }
}

export default {
  bind(el, binding, vnode) {
    getValue(el, binding, vnode)
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    getValue(el, binding, vnode)
  },
  unbind (el, binding, vnode, oldVnode) {
    if (el && el.safe) {
      el.safe.destroy()
    }
  }
}
