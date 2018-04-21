import request from '@/utils/request'

export function showall () {
  return request({
    url: '/users/showall',
    headers: {
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post'
  })
}
