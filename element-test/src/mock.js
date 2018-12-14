// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// const Random = Mock.Random
// mock一组数据
const indexPicsData = function () {
  return {
    data: [
      {id: 1, idView: require('./assets/img/29523-105.jpg')},
      {id: 2, idView: require('./assets/img/37459-105.jpg')},
      {id: 3, idView: require('./assets/img/30213-105.jpg')},
      {id: 4, idView: require('./assets/img/33740-105.jpg')},
      {id: 5, idView: require('./assets/img/35005-105.jpg')}
    ]
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(new RegExp('/index/pics'), 'get', indexPicsData)
