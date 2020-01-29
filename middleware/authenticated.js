export default function ({ store, redirect }) {
  if (!store.state.authorized) {
    return redirect('/login')
  }
}
