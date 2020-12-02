import {capitalize} from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      console.log(method)
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implement in ${this.name || ''} Component`
        )
      }
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDomListeners() {

  }
}

// input => OnInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
