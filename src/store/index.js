import Vue from 'vue'
import Vuex from 'vuex'
import puppies from './modules/puppies'
import parents from './modules/parents'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    puppies,
    parents
  },
  debug: true
})
