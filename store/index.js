export const state = () => ({
  authorized: false,
  statement: 'This is Test.'
  // nickname: ''
})

export const mutations = {
  login (state) {
    state.authorized = true
  },
  logout (state) {
    state.authorized = false
  }
}

export const getters = {
  authorized (state) {
    return state.authorized
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
    alert('ログアウトしました')
    commit('logout')
    this.$router.push('/inspire') // /飛ばす先はまた考えます
  }
}
