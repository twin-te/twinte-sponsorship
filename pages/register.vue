<template>
  <section class="section">
    <h1>寄付・サブスクのお願い</h1>
    <div class="is-mobile">
      <h1>サブスク</h1>
      <div class="buttons">
        <b-button v-on:click="registerSubscription('plan_GZwD2T1hVZVNZd')" type="is-primary" expanded>
          月200円寄付
        </b-button>
      </div>
      <div class="buttons">
        <b-button v-on:click="registerSubscription('plan_GZwDaJIQA5yPex')" type="is-primary" expanded>
          月500円寄付
        </b-button>
      </div>
      <div class="buttons">
        <b-button v-on:click="registerSubscription('plan_GZwD0M4vQGFRPH')" type="is-primary" expanded>
          月1000円寄付
        </b-button>
      </div>
    </div>
    <div class="is-mobile">
      <h1>単発</h1>
      <b-field label="値段">
        <b-slider v-model="value" :min="100" :max="10000" />
      </b-field>
      <div class="buttons">
        <b-button v-on:click="registerOneTime(value)" type="is-primary" expanded>
          {{ value }}円寄付
        </b-button>
      </div>
      ※手数料を差し引くとTwin:teには{{ Math.floor(value*0.964) }}円寄付されます。
      <p v-if="$store.state.login">
        {{ $store.state.statement }}
      </p>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      value: 500
    }
  },
  methods: {
    registerSubscription (plan) {
      const stripe = window.Stripe('pk_test_BiJShQLk2tTyKXCJof20dplQ00blaeB3yf') // public key
      this.$axios.$post('/payment/checkout-session/subscription', {
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
    },
    registerOneTime (amount) {
      const stripe = window.Stripe('pk_test_BiJShQLk2tTyKXCJof20dplQ00blaeB3yf') // public key
      this.$axios.$post('/payment/checkout-session/onetime', {
        amount
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
