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
        // alert('ok')
        commit('login')
      }
    ).catch(
      (res) => {
        console.log(res)
        // alert('ログインに失敗しました')
      }
    )
  },
  logout ({ commit }) {
    this.$axios.$get('/auth/logout')
    alert('ログアウトしました')
    commit('logout')
    this.$router.push('/') // /に飛ばす
  }
}
