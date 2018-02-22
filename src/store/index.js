import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    fetchStatusReport ({ commit }) {
      let path = 'https://jp1.api.riotgames.com/lol/status/v3/shard-data'
      let params = qs.stringify({ api_key: '' })
      let url = path + '?' + params

      axios.get(url).then(response => {
        commit('setStatus', response.data)
      })
    }
  },
  mutations: {
    setStatus (state, status) {
      state.status = status
    }
  },
  state: {
    status: null
  },
  getters: {
    status (state) {
      return state.status
    }
  },
  modules: {}
})

export default store
