import Vue from 'vue'
import Message from './message.vue'

const createMessage = (text) => {
  // 获取body并且创建一个新的div节点
  const {body} = document
  const div1 = document.createElement('div')

  // 给div1设置id
  div1.setAttribute('id', 'message')
  body.appendChild(div1)

  // return一个Vue实例 并且挂在到div1上面
  return new Vue({
    render: h => h( Message, { props: { text: text }})
  }).$mount('#message')
}

export default createMessage