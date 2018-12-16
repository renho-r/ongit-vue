import request from '@/utils/request'

export function pullIndexPics (query) {
  return request({
    url: '/index/pics?count=6',
    method: 'get',
    params: query
  })
}
