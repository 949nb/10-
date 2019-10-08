class EventHub {
  private cache: { [key: string]: Array<(data?: unknown) => void> } = {};

  on(eventName, fn) {
    if(this.cache[eventName] === undefined) {
      this.cache[eventName] = []
    }
    this.cache[eventName].push(fn)
  }
  emit(eventName, data?) {
    (this.cache[eventName] || []).forEach(fn => fn(data))
  }

  off(eventName, fnName) {
    let index = this.cache[eventName].indexOf(fnName)
    if(index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}

export default EventHub