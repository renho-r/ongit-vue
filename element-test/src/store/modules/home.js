import {pullIndexPics} from '@/api/home'

const home = {
  state: {
    count: 5,
    indexPics: []
  },

  mutations: {
    SET_INDEXPICS: (state, indexPics) => {
      state.indexPics = indexPics
    },
    ADD_INDEXPICS: (state, indexPics) => {
      indexPics.forEach(item => { item.id = item.id + state.count })
      state.indexPics = state.indexPics.concat(indexPics)
      state.count += 5
    }
  },

  actions: {
    PullIndexPic ({ commit }) {
      return new Promise((resolve, reject) => {
        pullIndexPics({}).then(response => {
          const data = response.data
          commit('SET_INDEXPICS', data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddIndexPic ({ commit }, reqInfo) {
      return new Promise((resolve, reject) => {
        pullIndexPics({}).then(response => {
          const data = response.data
          commit('ADD_INDEXPICS', data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default home
