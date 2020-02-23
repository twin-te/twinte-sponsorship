export default function ({ store, redirect }) {
  if (!store.getters.authorized) {
    return redirect('/login')
  }
}
