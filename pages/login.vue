<template>
  <section class="section">
    <!-- <LoginAlert /> -->
    右上のログインボタンからログインしてください。
  </section>
</template>

<script>
// import LoginAlert from '~/components/LoginAlert'

export default {
  middleware: 'guest',
  components: {
    // LoginAlert
  }
}
</script>
