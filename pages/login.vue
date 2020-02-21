<template>
  <section class="section">
    <div class="card">
      <LoginAlert />
    </div>
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
