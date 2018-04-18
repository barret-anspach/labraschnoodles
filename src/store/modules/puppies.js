import puppyService from '@/services/puppyService'
import * as types from '../mutation-types'

const state = {
  puppies: []
}

// getters
const getters = {
  puppies: state => state.puppies
}

// actions
const actions = {
  fetchPuppies ({ commit }) {
    if (state.puppies.length > 0) {
      window.console.log('already have puppies:\n', state.puppies)
      commit(types.FETCH_PUPPIES_SUCCESS, { res: state.puppies })
    }
    puppyService.getPuppies()
      .then((res) => {
        console.log('GOT PUPPIES', res)
        commit(types.FETCH_PUPPIES_SUCCESS, { res })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
}

const mutations = {
  [types.FETCH_PUPPIES_SUCCESS] (state, { res }) {
    state.puppies = res
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
