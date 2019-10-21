<template>
  <div>
    <h1>toast组件</h1>
    <button class="btn" @click='showToast'>点我</button>
  </div>
</template>

<script>
import createMessage from './message.js'
export default {
  data() {
    return {

    }
  },
  methods: {
    showToast() {
     createMessage('我是弹窗') 
    }
  }
}
</script>

<style>
  .btn{
    height: 30px;
    width: 70px;
    border-radius: 5px;
  }
  .btn:focus{
    outline: none;
  }
  .btn:hover{
    background-color: #D8D8D8;
  }
</style>