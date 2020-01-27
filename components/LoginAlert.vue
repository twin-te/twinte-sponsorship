<template>
  <section>
    ログイン方法の洗濯
    <div>
      <a href="https://dev.api.twinte.net/v1/auth/google?redirect-to=https://www.twinte.net">
        <img
          src="~assets/authing/sign-in-with-google.png"
          alt="sign in with google"
        >
      </a>
    </div>
    <div>
      <a href="https://dev.api.twinte.net/v1/auth/apple?redirect-to=https://www.twinte.net">
        <img
          src="~assets/authing/sign-in-with-apple.png"
          alt="SignInWithApple"
        >
      </a>
    </div>
    <div>
      <a href="https://dev.api.twinte.net/v1/auth/twitter?redirect-to=https://www.twinte.net">
        <img
          src="~assets/authing/sign-in-with-twitter.png"
          alt="ign-in-with-twitter"
        >
      </a>
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
