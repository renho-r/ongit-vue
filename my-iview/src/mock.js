// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
  return {
    us: Random.email()
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(new RegExp('/auth/oauth/token'), 'post', produceNewsData)
