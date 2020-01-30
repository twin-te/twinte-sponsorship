export default function ({ store, redirect }) {
  if (store.state.isAuthorized) {
    return redirect('/')
  }
}
