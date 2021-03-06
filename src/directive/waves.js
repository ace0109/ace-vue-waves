import './waves.scss'

const context = '@@wavesContext'

function handleMouseDown(el, binding) {
  function handle(e) {
    const customOpts = Object.assign({}, binding.value)
    const opts = Object.assign(
      {
        ele: el,
        type: 'hit',
        color: 'rgba(0, 0, 0, 0.15)'
      },
      customOpts
    )
    const target = opts.ele
    if (target) {
      target.style.position = 'relative'
      target.style.overflow = 'hidden'
      const rect = target.getBoundingClientRect()
      let ripple = document.createElement('span')
      ripple.className = 'waves-ripple'
      ripple.style.height = ripple.style.width =
        Math.max(rect.width, rect.height) + 'px'
      target.appendChild(ripple)
      switch (opts.type) {
        case 'center':
          ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px'
          ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px'
          break
        default:
          ripple.style.top =
            (e.pageY -
              rect.top -
              ripple.offsetHeight / 2 -
              document.documentElement.scrollTop || document.body.scrollTop) +
            'px'
          ripple.style.left =
            (e.pageX -
              rect.left -
              ripple.offsetWidth / 2 -
              document.documentElement.scrollLeft || document.body.scrollLeft) +
            'px'
      }
      ripple.style.backgroundColor = opts.color
      ripple.className = 'waves-ripple z-active'
      target.addEventListener(
        'mouseup',
        handleRemove(target, ripple),
        { once: true },
        false
      )
      target.addEventListener(
        'mouseleave',
        handleRemove(target, ripple),
        { once: true },
        false
      )
      return false
    }
  }

  if (!el[context]) {
    el[context] = {
      removeHandle: handle
    }
  } else {
    el[context].removeHandle = handle
  }

  return handle
}

function handleRemove(target, ripple) {
  function remove() {
    if (ripple) {
      setTimeout(() => {
        ripple.remove()
      }, 400)
    }
  }

  return remove
}

export default {
  bind(el, binding) {
    el.addEventListener('mousedown', handleMouseDown(el, binding), false)
  },
  update(el, binding) {
    el.removeEventListener('mousedown', el[context].removeHandle, false)
    el.addEventListener('mousedown', handleMouseDown(el, binding), false)
  },
  unbind(el) {
    el.removeEventListener('mousedown', el[context].removeHandle, false)
    el[context] = null
    delete el[context]
  }
}
