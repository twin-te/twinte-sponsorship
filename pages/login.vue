<template>
  <section class="section">
    <LoginAlert />
  </section>
</template>

<script>
import LoginAlert from '~/components/LoginAlert'

export default {
  middleware: 'guest',
  components: {
    LoginAlert
  }
}
</script>
