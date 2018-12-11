<template>
  <div id="e2">
    <div v-html="message"></div>
    <label for="r1">修改颜色</label><input type="checkbox" v-model="colorValue" id="r1">
    <br><br>
    <div v-bind:class="{'classStyle': colorValue}">
      v-bind:class 指令
    </div>
    <p v-if="seen">现在你看到我了</p>
    <pre><a v-bind:href="url">菜鸟教程</a></pre>
    <a v-on:click="doSomething"></a>
    {{ message | capitalize }}
  </div>
</template>

<script>
export default {
  name: 'E2',
  data: function () {
    return {
      'message': 'renho',
      colorValue: false,
      seen: false,
      url: 'http://www.runoob.com'
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>
.classStyle {
  color: red;
}
</style>
