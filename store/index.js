export const state = () => ({
  isAuthorized: false
  // nickname: ''
})

export const mutations = {
  login (state) {
    state.isAuthorized = true
  },
  logout (state) {
    state.isAuthorized = false
  }
}

export const getters = {
  authorized (state) {
    return state.isAuthorized
  }
}

export const actions = {
  login ({ commit }) {
    this.$axios.$get('/users/me').then(
      () => {
        commit('login')
      }
    ).catch(
      (res) => {
        console.log(res)
      }
    )
  },
  logout ({ commit }) {
    this.$axios.$get('/auth/logout')
    commit('logout')
    this.$router.push('/') // /に飛ばす
  }
}
