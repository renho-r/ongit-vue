<template>
  <div id="app" v-runoob:hello.a.b="message">
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>
  </div>
</template>

<script>
import Vue from 'vue'
// Vue.directive('focus', {
//   // 当绑定元素插入到 DOM 中。
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
Vue.directive('runoob', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: ' + s(binding.name) + '<br>' +
      'value: ' + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: ' + s(binding.arg) + '<br>' +
      'modifiers: ' + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})
export default {
  name: 'E11',
  data: function () {
    return {
      message: '菜鸟教程!'
    }
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    }
  }
}
</script>

<style scoped>

</style>
