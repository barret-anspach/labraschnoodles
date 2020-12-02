import puppyService from '@/services/puppyService'
import * as types from '../mutation-types'

const state = {
  parents: []
}

// getters
const getters = {
  parents: state => state.parents
}

// actions
const actions = {
  fetchParents ({ commit }) {
    if (state.parents.length > 0) {
      // Already got parents
      commit(types.FETCH_PARENTS_SUCCESS, { res: state.parents })
    }
    puppyService.getParents()
      .then((res) => {
        // Got the parents!
        commit(types.FETCH_PARENTS_SUCCESS, { res })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
}

const mutations = {
  [types.FETCH_PARENTS_SUCCESS] (state, { res }) {
    state.parents = res
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
