export const state = () => ({
  login: false,
  statement: 'This is Test.'
})

export const mutations = {
  increment (state) {
    state.count += 2
  }
}

export const actions = {
  getLoginState () {
    this.$axios.$get('/users/me', {
      withCredentials: true
    }).then(function () {
      alert('OK')
      state.login = true
    }
    ).catch(
      function () {
        alert('NG')
        state.login = false
      }
    )
  }
}
