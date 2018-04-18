import Vue from 'vue'
import Vuex from 'vuex'
import puppies from './modules/puppies'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    puppies
  },
  debug: true
})
