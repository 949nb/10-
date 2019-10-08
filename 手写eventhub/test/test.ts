import EventHub from "../src/EventHub";

const eventHub = new EventHub

let one = () => console.log(1)
let two = (y) => console.log(y)

eventHub.on('xxx', one)
eventHub.on('xxx', two)

eventHub.off('xxx', one)
eventHub.emit('xxx', '我滴个妈呀啊')

console.assert()