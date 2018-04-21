import { showall } from '@/api/users'

const users = {
  state: {
    usersData: []
  },
  mutations: {
    SET_USERSDATA: (state, usersData) => {
      state.usersData = usersData
    }
  },
  actions: {
    Users ({ commit }, users) {
      return new Promise((resolve, reject) => {
        showall().then(response => {
          const data = response.data
          commit('SET_USERSDATA', data.histories)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default users
