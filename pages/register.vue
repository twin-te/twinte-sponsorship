<template>
  <section class="section">
    <div class="is-mobile">
      <div class="buttons">
        <b-button v-on:click="register('plan_GZwD2T1hVZVNZd')" type="is-primary" expanded>
          月200円寄付
        </b-button>
      </div>
      <div class="buttons">
        <b-button v-on:click="register('plan_GZwDaJIQA5yPex')" type="is-primary" expanded>
          月500円寄付
        </b-button>
      </div>
      <div class="buttons">
        <b-button v-on:click="register('plan_GZwD0M4vQGFRPH')" type="is-primary" expanded>
          月1000円寄付
        </b-button>
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
      name: 'Vue.js'
    }
  },
  methods: {
    register (plan) {
      const stripe = window.Stripe('pk_test_BiJShQLk2tTyKXCJof20dplQ00blaeB3yf') // public key
      this.$axios.$post('https://dev.api.twinte.net/v1/payment/checkout-session/subscription', {
        plan_id: plan
      }, {
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        const sessionId = response.sessionId
        stripe.redirectToCheckout({
          sessionId
        }).then(function (result) {
        // 失敗時のみ呼び出される
        })
      })
    }
  }
}
</script>
