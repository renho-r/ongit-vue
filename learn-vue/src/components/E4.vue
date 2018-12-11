<template>
  <div id="app">
    <ol>
      <li v-for="site in sites" v-bind:key="site.num">
        {{ site.name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'E4',
  data: function () {
    return {
      sites: [
        { name: 'Runoob' },
        { name: 'Google' },
        { name: 'Taobao' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
