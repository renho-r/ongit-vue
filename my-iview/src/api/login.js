import request from '@/utils/request'

export function login (username, password) {
  var grantType = 'password'
  var scope = 'server'
  return request({
    url: '/auth/oauth/token',
    headers: {
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: { username, password, grantType, scope }
  })
}
// params: { username, password, grantType, scope }
/* data: {
  username: username,
  password: password,
  grantType: grantType,
  scope: scope
} */
