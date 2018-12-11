<template>
  <div id="app">
    <p>input 元素：</p>
    <input v-model="message" placeholder="编辑我……">
    <p>消息是: {{ message }}</p>

    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>
    <br>
    <input type="radio" id="runoobRadio" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" id="googleRadio" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>
    <br>
    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
    </div>
    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model.lazy="msg" >
    <input v-model.number="age" type="number">
    <input v-model.trim="msg">
  </div>
</template>

<script>
export default {
  name: 'E9',
  data: function () {
    return {
      message: 'Runoob',
      message2: '菜鸟教程\r\nhttp://www.runoob.com',
      checked: false,
      checkedNames: [],
      picked: 'Runoob',
      selected: '',
      msg: 'msg',
      age: 100
    }
  }
}
</script>

<style scoped>

</style>
