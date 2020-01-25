<template>
  <section class="section">
    <div class="is-mobile">
      <b-field label="値段">
        <b-slider v-model="value" :min="100" :max="10000"/>
      </b-field>
      <div class="buttons">
        <b-button v-on:click="register(value)" type="is-primary" expanded>
          {{ value }}円寄付
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
      value: 100
    }
  },
  methods: {
    register (amount) {
      const stripe = window.Stripe('pk_test_BiJShQLk2tTyKXCJof20dplQ00blaeB3yf') // public key
      this.$axios.$post('https://dev.api.twinte.net/v1/payment/checkout-session/onetime', {
        amount
      }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
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
