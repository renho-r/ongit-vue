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

const usersData = {
  'histories': [{
    'username': '智能审批',
    'shenpistatus': '审批已通过',
    'shenpicomments': '自动审批通过',
    'time': '2017-07-24 18:11'
  },
  {
    'username': '智能审批',
    'shenpistatus': '审批已通过',
    'shenpicomments': '自动审批通过',
    'time': '2017-07-24 18:11'
  }]
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(new RegExp('/users/showall'), 'post', usersData)
