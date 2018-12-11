<template>
  <div id = "app">
    <div v-bind:class="{ active: isActive }"></div>

    <div class="static"
         v-bind:class="{ active: isActive, 'text-danger': hasError }">
    </div>
  </div>
</template>

<script>
export default {
  name: 'E7',
  data: function () {
    return {
      isActive: true,
      hasError: true
    }
  }
}
</script>

<style scoped>
  .active {
    width: 100px;
    height: 100px;
    background: green;
  }
  .text-danger {
    background: red;
  }
</style>
