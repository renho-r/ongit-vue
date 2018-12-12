<template>
  <el-carousel :interval="3000" arrow="always" height="400px">
    <el-carousel-item v-for="item in indexPics" :key="item.id">
      <el-row>
        <el-col><img ref="imgHeight" :src="item.idView"/></el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'Index',
  data: function () {
    return {
      indexPics: []
    }
  },
  created: function () {
    this.pullIndexPic()
  },
  methods: {
    pullIndexPic: function () {
      request({
        url: '/index/pics',
        method: 'get'
      }).then(response => {
        if (response.data.data) {
          this.indexPics = response.data.data
        } else {
          this.$message.error(response.data.msg)
        }
      })
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
