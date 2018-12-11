<template>
  <div class='menu-wrapper'>
    <div v-for="item in routes" :key="item.toString()">
      <span>{{item.index}}</span>
    </div>
    <!--<template v-for="item in routes">-->
      <!--<router-link v-if="!item.hidden && item.noDropdown && item.children != null && item.children.length>0" :to="item.path+'/'+item.children[0].path">-->
        <!--<el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>-->
          <!--<svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>-->
          <!--<span v-if="item.children[0].name">{{generateTitle(item.children[0].name)}}</span>-->
        <!--</el-menu-item>-->
      <!--</router-link>-->
    <!--</template>-->
  </div>
</template>

<script>
export default {
  name: 'mymenu',
  data () {
    return {
      routes: [{
        hidden: false,
        noDropdown: true,
        children: null,
        index: '1',
        path: '/layout1'
      }]
    }
  }
}
</script>
