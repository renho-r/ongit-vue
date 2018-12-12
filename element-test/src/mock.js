// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// const Random = Mock.Random
// mock一组数据
const indexPicsData = function () {
  return {
    data: [
      {id: 1, idView: require('./assets/logo.png')},
      {id: 2, idView: require('./assets/logo.png')},
      {id: 3, idView: require('./assets/logo.png')}
    ]
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(new RegExp('/index/pics'), 'get', indexPicsData)
