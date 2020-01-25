<template>
  <section class="section">
    <div class="is-mobile">
      <div v-for="item in history" :key="item.subscription_id">
        <b-message title="item.plan" aria-close-label="Close message" style="margin-bottom:10px;">
          <ul>
            <li>ID:{{ item.subscription_id }}</li>
            <li>プラン:{{ item.plan[0].name }}</li>
            <li>状態：{{ item.status }} </li>
            <li>登録日：{{ item.start_at }}</li>
          </ul>
        </b-message>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',

  components: {

  },

  data () {
    return {
      history: null
    }
  },
  mounted () {
    this.$axios.$get('https://dev.api.twinte.net/v1/payment/subscriptions', {
      withCredentials: true
    })
      .then(response => (this.history = response))
  }
}
</script>
