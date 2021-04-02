<template>
  <section>
    <div class="modal-card has-text-centered">
      <header class="modal-card-head">
        <p class="modal-card-title">
          以下の方法でTwin:teにログインしてください。
        </p>
      </header>
      <section class="modal-card-body">
        <div>
          <a href="https://app.twinte.net/auth/v3/google?redirect_url=https://sponsorship.twinte.net">
            <img
              src="~assets/authing/sign-in-with-google.png"
              alt="sign in with google"
            >
          </a>
        </div>
        <div>
          <a href="https://app.twinte.net/auth/v3/apple?redirect_url=https://sponsorship.twinte.net">
            <img
              src="~assets/authing/sign-in-with-apple.png"
              alt="SignInWithApple"
            >
          </a>
        </div>
        <div>
          <a href="https://app.twinte.net/auth/v3/twitter?redirect_url=https://sponsorship.twinte.net">
            <img
              src="~assets/authing/sign-in-with-twitter.png"
              alt="ign-in-with-twitter"
            >
          </a>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button @click="$parent.close()" class="button" type="button">
          Close
        </button>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
}
</script>
<style scoped>
img {
  width: 300px;
}
</style>
