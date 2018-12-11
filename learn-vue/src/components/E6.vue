<template>
  <div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
  </div>
</template>

<script>
export default {
  name: 'E6',
  data: function () {
    return {
      counter: 1
    }
  },
  watch: {
    counter: function (curVal, oldVal) {
      console.log(curVal, oldVal)
    }
  }
}
</script>

<style scoped>

</style>
