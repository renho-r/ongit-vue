import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import users from './modules/users'
import renho from './modules/renho'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    renho,
    users
  },
  getters
})

export default store
