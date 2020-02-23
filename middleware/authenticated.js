export default function ({ store, redirect }) {
  store.dispatch('login')
  if (!store.getters.authorized) {
    return redirect('/login')
  }
}
