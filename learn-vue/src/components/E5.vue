<template>
  <div id="app">
  {{ message.split('').reverse().join('') }}
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
  <p>{{ site }}</p>
</div>
</template>

<script>
export default {
  name: 'E5',
  data: function () {
    return {
      message: 'Runoob!',
      name: 'Google',
      url: 'http://www.google.com'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    site: {
      // getter
      get: function () {
        return this.name + ' ' + this.url
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
}
</script>

<style scoped>

</style>
