<template>
  <div>
    <div id='toastDiv' class="toast">
      <span> {{text}} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
    }
  }
}
</script>

<style>
  .toast {
    height: 30px;
    margin-bottom: 10px;
    width: 100px;
    border-radius: 5px;
    background-color: #D8D8D8;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    position: fixed;
    top: 10px;
    left: calc(50% - 50px);
  }
</style>